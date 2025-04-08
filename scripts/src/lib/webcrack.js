var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/index.ts
import { parse as parse2 } from "@babel/parser";
import * as m54 from "@codemod/matchers";
import debug6 from "debug";
import { join as join3, normalize as normalize2 } from "node:path";

// src/ast-utils/ast.ts
import * as t from "@babel/types";
function getPropName(node) {
  if (t.isIdentifier(node)) {
    return node.name;
  }
  if (t.isStringLiteral(node)) {
    return node.value;
  }
  if (t.isNumericLiteral(node)) {
    return node.value.toString();
  }
}

// babel-import:@babel/generator
var generator_exports = {};
__export(generator_exports, {
  default: () => generator_default
});
__reExport(generator_exports, lib_star);
import module from "@babel/generator/lib/index.js";
import * as lib_star from "@babel/generator/lib/index.js";
var generator_default = module.default ?? module;

// src/ast-utils/generator.ts
var defaultOptions = { jsescOption: { minimal: true } };
function generate(ast, options = defaultOptions) {
  return generator_default(ast, options).code;
}
function codePreview(node) {
  const code = generate(node, {
    minified: true,
    shouldPrintComment: () => false,
    ...defaultOptions
  });
  if (code.length > 100) {
    return code.slice(0, 70) + " \u2026 " + code.slice(-30);
  }
  return code;
}

// babel-import:@babel/traverse
var traverse_exports = {};
__export(traverse_exports, {
  default: () => traverse_default
});
__reExport(traverse_exports, lib_star2);
import module2 from "@babel/traverse/lib/index.js";
import * as lib_star2 from "@babel/traverse/lib/index.js";
var traverse_default = module2.default ?? module2;

// src/ast-utils/inline.ts
import * as t3 from "@babel/types";
import * as m2 from "@codemod/matchers";

// src/ast-utils/matcher.ts
import * as t2 from "@babel/types";
import * as m from "@codemod/matchers";
var safeLiteral = m.matcher(
  (node) => t2.isLiteral(node) && (!t2.isTemplateLiteral(node) || node.expressions.length === 0)
);
function infiniteLoop(body) {
  return m.or(
    m.forStatement(void 0, null, void 0, body),
    m.forStatement(void 0, truthyMatcher, void 0, body),
    m.whileStatement(truthyMatcher, body)
  );
}
function constKey(name) {
  return m.or(m.identifier(name), m.stringLiteral(name));
}
function constObjectProperty(value) {
  return m.or(
    m.objectProperty(m.identifier(), value, false),
    m.objectProperty(m.or(m.stringLiteral(), m.numericLiteral()), value)
  );
}
function anonymousFunction(params, body) {
  return m.or(
    m.functionExpression(null, params, body, false),
    m.arrowFunctionExpression(params, body)
  );
}
function iife(params, body) {
  return m.callExpression(anonymousFunction(params, body));
}
function constMemberExpression(object, property) {
  if (typeof object === "string") object = m.identifier(object);
  return m.or(
    m.memberExpression(object, m.identifier(property), false),
    m.memberExpression(object, m.stringLiteral(property), true)
  );
}
var undefinedMatcher = m.or(
  m.identifier("undefined"),
  m.unaryExpression("void", m.numericLiteral(0))
);
var trueMatcher = m.or(
  m.booleanLiteral(true),
  m.unaryExpression("!", m.numericLiteral(0)),
  m.unaryExpression("!", m.unaryExpression("!", m.numericLiteral(1))),
  m.unaryExpression("!", m.unaryExpression("!", m.arrayExpression([])))
);
var falseMatcher = m.or(
  m.booleanLiteral(false),
  m.unaryExpression("!", m.arrayExpression([]))
);
var truthyMatcher = m.or(trueMatcher, m.arrayExpression([]));
function findParent(path, matcher17) {
  return path.findParent(
    (path2) => matcher17.match(path2.node)
  );
}
function findPath(path, matcher17) {
  return path.find((path2) => matcher17.match(path2.node));
}
function createFunctionMatcher(params, body) {
  const captures = Array.from(
    { length: params },
    () => m.capture(m.anyString())
  );
  return m.functionExpression(
    void 0,
    captures.map(m.identifier),
    m.blockStatement(
      body(...captures.map((c) => m.identifier(m.fromCapture(c))))
    )
  );
}
function isReadonlyObject(binding, memberAccess, strict = true) {
  if (!isConstantBinding(binding)) return false;
  function isPatternAssignment(member) {
    const { parentPath } = member;
    return (
      // [obj.property] = [1];
      parentPath?.isArrayPattern() || // ({ property: obj.property } = {})
      // ({ ...obj.property } = {})
      parentPath?.parentPath?.isObjectPattern() && (parentPath.isObjectProperty({ value: member.node }) || parentPath.isRestElement()) || // ([obj.property = 1] = [])
      // ({ property: obj.property = 1 } = {})
      parentPath?.isAssignmentPattern({ left: member.node })
    );
  }
  return binding.referencePaths.every(
    (path) => (
      // obj.property
      memberAccess.match(path.parent) ? (
        // obj.property = 1
        !path.parentPath?.parentPath?.isAssignmentExpression({
          left: path.parent
        }) && // obj.property++
        !path.parentPath?.parentPath?.isUpdateExpression({
          argument: path.parent
        }) && // delete obj.property
        !path.parentPath?.parentPath?.isUnaryExpression({
          argument: path.parent,
          operator: "delete"
        }) && !isPatternAssignment(path.parentPath)
      ) : !strict
    )
  );
}
function isConstantBinding(binding) {
  if (binding.constant || binding.constantViolations[0] === binding.path)
    return true;
  if (binding.kind === "param" && binding.constantViolations.length === 1) {
    const [path] = binding.constantViolations;
    if (path.isAssignmentExpression() && !isBindingPossiblyUsedBefore(binding, path))
      return true;
  }
  return false;
}
function isBindingPossiblyUsedBefore(binding, before, includeParent = true) {
  return binding.referencePaths.some((rp) => {
    if (rp.node.start != null && before.node.start != null) {
      if (rp.node.start <= before.node.start) return true;
    } else {
      return true;
    }
    if (includeParent) {
      for (let p = rp.parentPath; p; p = p.parentPath) {
        if (p === before) return true;
      }
    }
    return false;
  });
}
function isTemporaryVariable(binding, references, kind = "var") {
  return binding !== void 0 && binding.references === references && binding.constantViolations.length === 1 && (kind === "var" ? binding.path.isVariableDeclarator() && binding.path.node.init === null : binding.path.listKey === "params" && binding.path.isIdentifier());
}
var AnySubListMatcher = class extends m.Matcher {
  constructor(matchers) {
    super();
    this.matchers = matchers;
  }
  matchValue(array, keys) {
    if (!Array.isArray(array)) return false;
    if (this.matchers.length === 0 && array.length === 0) return true;
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      const matches = this.matchers[j].matchValue(array[i], [...keys, i]);
      if (matches) {
        j++;
        if (j === this.matchers.length) {
          return true;
        }
      }
    }
    return false;
  }
};
function anySubList(...elements) {
  return new AnySubListMatcher(elements);
}
function declarationOrAssignment(name, matcher17) {
  return m.or(
    m.variableDeclaration(m.anything(), [m.variableDeclarator(name, matcher17)]),
    m.expressionStatement(m.assignmentExpression("=", name, matcher17))
  );
}
function declaratorOrAssignmentExpression(name, matcher17) {
  return m.or(
    m.variableDeclarator(name, matcher17),
    m.assignmentExpression("=", name, matcher17)
  );
}

// src/ast-utils/inline.ts
function inlineVariable(binding, value = m2.anyExpression(), unsafeAssignments = false) {
  const varDeclarator = binding.path.node;
  const varMatcher = m2.variableDeclarator(
    m2.identifier(binding.identifier.name),
    value
  );
  const assignmentMatcher = m2.assignmentExpression(
    "=",
    m2.identifier(binding.identifier.name),
    value
  );
  if (binding.constant && varMatcher.match(varDeclarator)) {
    binding.referencePaths.forEach((ref) => {
      ref.replaceWith(varDeclarator.init);
    });
    binding.path.remove();
  } else if (unsafeAssignments && binding.constantViolations.length >= 1) {
    let getNearestAssignment2 = function(location) {
      return assignments.findLast((assignment) => assignment.start < location);
    };
    var getNearestAssignment = getNearestAssignment2;
    const assignments = binding.constantViolations.map((path) => path.node).filter((node) => assignmentMatcher.match(node));
    if (!assignments.length) return;
    for (const ref of binding.referencePaths) {
      const assignment = getNearestAssignment2(ref.node.start);
      if (assignment) ref.replaceWith(assignment.right);
    }
    for (const path of binding.constantViolations) {
      if (path.parentPath?.isExpressionStatement()) {
        path.remove();
      } else if (path.isAssignmentExpression()) {
        path.replaceWith(path.node.right);
      }
    }
    binding.path.remove();
  }
}
function inlineArrayElements(array, references) {
  for (const reference of references) {
    const memberPath = reference.parentPath;
    const property = memberPath.node.property;
    const index = property.value;
    const replacement = array.elements[index];
    memberPath.replaceWith(t3.cloneNode(replacement));
  }
}
function inlineObjectProperties(binding, property = m2.objectProperty()) {
  const varDeclarator = binding.path.node;
  const objectProperties = m2.capture(m2.arrayOf(property));
  const varMatcher = m2.variableDeclarator(
    m2.identifier(binding.identifier.name),
    m2.objectExpression(objectProperties)
  );
  if (!varMatcher.match(varDeclarator)) return;
  const propertyMap = new Map(
    objectProperties.current.map((p) => [getPropName(p.key), p.value])
  );
  if (!binding.referencePaths.every((ref) => {
    const member = ref.parent;
    const propName = getPropName(member.property);
    return propertyMap.has(propName);
  }))
    return;
  binding.referencePaths.forEach((ref) => {
    const memberPath = ref.parentPath;
    const propName = getPropName(memberPath.node.property);
    const value = propertyMap.get(propName);
    memberPath.replaceWith(value);
  });
  binding.path.remove();
}
function inlineFunctionCall(fn, caller) {
  if (t3.isRestElement(fn.params[1])) {
    caller.replaceWith(
      t3.callExpression(
        caller.node.arguments[0],
        caller.node.arguments.slice(1)
      )
    );
    return;
  }
  const returnedValue = fn.body.body[0].argument;
  const clone = t3.cloneNode(returnedValue, true);
  traverse_default(clone, {
    Identifier(path) {
      const paramIndex = fn.params.findIndex(
        (p) => p.name === path.node.name
      );
      if (paramIndex !== -1) {
        path.replaceWith(
          caller.node.arguments[paramIndex] ?? t3.unaryExpression("void", t3.numericLiteral(0))
        );
        path.skip();
      }
    },
    noScope: true
  });
  caller.replaceWith(clone);
}
function inlineFunctionAliases(binding) {
  const state = { changes: 0 };
  const refs = [...binding.referencePaths];
  for (const ref of refs) {
    const fn = findParent(ref, m2.functionDeclaration());
    const fnName = m2.capture(m2.anyString());
    const returnedCall = m2.capture(
      m2.callExpression(
        m2.identifier(binding.identifier.name),
        m2.anyList(m2.slice({ min: 2 }))
      )
    );
    const matcher17 = m2.functionDeclaration(
      m2.identifier(fnName),
      m2.anyList(m2.slice({ min: 2 })),
      m2.blockStatement([m2.returnStatement(returnedCall)])
    );
    if (fn && matcher17.match(fn.node)) {
      const paramUsedInDecodeCall = fn.node.params.some((param) => {
        const binding2 = fn.scope.getBinding(param.name);
        return binding2?.referencePaths.some(
          (ref2) => ref2.findParent((p) => p.node === returnedCall.current)
        );
      });
      if (!paramUsedInDecodeCall) continue;
      const fnBinding = fn.scope.parent.getBinding(fnName.current);
      if (!fnBinding) continue;
      const fnRefs = fnBinding.referencePaths;
      refs.push(...fnRefs);
      const callRefs = fnRefs.filter(
        (ref2) => t3.isCallExpression(ref2.parent) && t3.isIdentifier(ref2.parent.callee, { name: fnName.current })
      ).map((ref2) => ref2.parentPath);
      for (const callRef of callRefs) {
        inlineFunctionCall(fn.node, callRef);
        state.changes++;
      }
      fn.remove();
      state.changes++;
    }
  }
  binding.scope.crawl();
  return state;
}
function inlineVariableAliases(binding, targetName = binding.identifier.name) {
  const state = { changes: 0 };
  const refs = [...binding.referencePaths];
  const varName = m2.capture(m2.anyString());
  const matcher17 = m2.or(
    m2.variableDeclarator(
      m2.identifier(varName),
      m2.identifier(binding.identifier.name)
    ),
    m2.assignmentExpression(
      "=",
      m2.identifier(varName),
      m2.identifier(binding.identifier.name)
    )
  );
  for (const ref of refs) {
    if (matcher17.match(ref.parent)) {
      const varScope = ref.scope;
      const varBinding = varScope.getBinding(varName.current);
      if (!varBinding) continue;
      if (ref.isIdentifier({ name: varBinding.identifier.name })) continue;
      state.changes += inlineVariableAliases(varBinding, targetName).changes;
      if (ref.parentPath?.isAssignmentExpression()) {
        varBinding.path.remove();
        if (t3.isExpressionStatement(ref.parentPath.parent)) {
          ref.parentPath.remove();
        } else {
          ref.parentPath.replaceWith(t3.identifier(targetName));
        }
      } else if (ref.parentPath?.isVariableDeclarator()) {
        ref.parentPath.remove();
      }
      state.changes++;
    } else {
      ref.replaceWith(t3.identifier(targetName));
      state.changes++;
    }
  }
  return state;
}

// src/ast-utils/rename.ts
import * as t4 from "@babel/types";
import * as m3 from "@codemod/matchers";
function renameFast(binding, newName) {
  binding.referencePaths.forEach((ref) => {
    if (ref.isExportDefaultDeclaration()) return;
    if (!ref.isIdentifier()) {
      throw new Error(
        `Unexpected reference (${ref.type}): ${codePreview(ref.node)}`
      );
    }
    if (ref.scope.hasBinding(newName)) ref.scope.rename(newName);
    ref.node.name = newName;
  });
  const patternMatcher = m3.assignmentExpression(
    "=",
    m3.or(m3.arrayPattern(), m3.objectPattern())
  );
  binding.constantViolations.forEach((ref) => {
    if (ref.scope.hasBinding(newName)) ref.scope.rename(newName);
    if (ref.isAssignmentExpression() && t4.isIdentifier(ref.node.left)) {
      ref.node.left.name = newName;
    } else if (ref.isUpdateExpression() && t4.isIdentifier(ref.node.argument)) {
      ref.node.argument.name = newName;
    } else if (ref.isUnaryExpression({ operator: "delete" }) && t4.isIdentifier(ref.node.argument)) {
      ref.node.argument.name = newName;
    } else if (ref.isVariableDeclarator() && t4.isIdentifier(ref.node.id)) {
      ref.node.id.name = newName;
    } else if (ref.isVariableDeclarator() && t4.isArrayPattern(ref.node.id)) {
      const ids = ref.getBindingIdentifiers();
      for (const id in ids) {
        if (id === binding.identifier.name) {
          ids[id].name = newName;
        }
      }
    } else if (ref.isFor() || patternMatcher.match(ref.node)) {
      traverse_default(ref.node, {
        Identifier(path) {
          if (path.scope !== ref.scope) return path.skip();
          if (path.node.name === binding.identifier.name) {
            path.node.name = newName;
          }
        },
        noScope: true
      });
    } else if (ref.isFunctionDeclaration() && t4.isIdentifier(ref.node.id)) {
      ref.node.id.name = newName;
    } else {
      throw new Error(
        `Unexpected constant violation (${ref.type}): ${codePreview(ref.node)}`
      );
    }
  });
  binding.scope.removeOwnBinding(binding.identifier.name);
  binding.scope.bindings[newName] = binding;
  binding.identifier.name = newName;
}
function renameParameters(path, newNames) {
  const params = path.node.params;
  for (let i = 0; i < Math.min(params.length, newNames.length); i++) {
    const binding = path.scope.getBinding(params[i].name);
    renameFast(binding, newNames[i]);
  }
}

// src/ast-utils/transform.ts
import debug from "debug";
var logger = debug("webcrack:transforms");
async function applyTransformAsync(ast, transform, options) {
  logger(`${transform.name}: started`);
  const state = { changes: 0 };
  await transform.run?.(ast, state, options);
  if (transform.visitor)
    traverse_default(ast, transform.visitor(options), void 0, state);
  logger(`${transform.name}: finished with ${state.changes} changes`);
  return state;
}
function applyTransform(ast, transform, options) {
  logger(`${transform.name}: started`);
  const state = { changes: 0 };
  transform.run?.(ast, state, options);
  if (transform.visitor) {
    const visitor = transform.visitor(
      options
    );
    visitor.noScope = !transform.scope;
    traverse_default(ast, visitor, void 0, state);
  }
  logger(`${transform.name}: finished with ${state.changes} changes`);
  return state;
}
function applyTransforms(ast, transforms, options = {}) {
  options.log ??= true;
  const name = options.name ?? transforms.map((t50) => t50.name).join(", ");
  if (options.log) logger(`${name}: started`);
  const state = { changes: 0 };
  for (const transform of transforms) {
    transform.run?.(ast, state);
  }
  const traverseOptions = transforms.flatMap((t50) => t50.visitor?.() ?? []);
  if (traverseOptions.length > 0) {
    const visitor = traverse_exports.visitors.merge(traverseOptions);
    visitor.noScope = options.noScope || transforms.every((t50) => !t50.scope);
    traverse_default(ast, visitor, void 0, state);
  }
  if (options.log) logger(`${name}: finished with ${state.changes} changes`);
  return state;
}
function mergeTransforms(options) {
  return {
    name: options.name,
    tags: options.tags,
    scope: options.transforms.some((t50) => t50.scope),
    visitor() {
      return traverse_exports.visitors.merge(
        options.transforms.flatMap((t50) => t50.visitor?.() ?? [])
      );
    }
  };
}

// src/deobfuscate/index.ts
import debug4 from "debug";

// src/unminify/transforms/merge-strings.ts
import * as m4 from "@codemod/matchers";
var merge_strings_default = {
  name: "merge-strings",
  tags: ["safe"],
  visitor() {
    const left = m4.capture(m4.stringLiteral());
    const right = m4.capture(m4.stringLiteral());
    const matcher17 = m4.binaryExpression(
      "+",
      m4.or(left, m4.binaryExpression("+", m4.anything(), left)),
      right
    );
    return {
      BinaryExpression: {
        exit(path) {
          if (!matcher17.match(path.node)) return;
          left.current.value += right.current.value;
          right.current.value = "";
          path.replaceWith(path.node.left);
          path.skip();
          this.changes++;
        }
      }
    };
  }
};

// src/deobfuscate/array-rotator.ts
import * as m5 from "@codemod/matchers";
import { callExpression as callExpression5 } from "@codemod/matchers";
function findArrayRotator(stringArray) {
  const arrayIdentifier = m5.capture(m5.identifier());
  const pushShift = m5.callExpression(
    constMemberExpression(arrayIdentifier, "push"),
    [
      m5.callExpression(
        constMemberExpression(m5.fromCapture(arrayIdentifier), "shift")
      )
    ]
  );
  const callMatcher = iife(
    m5.anything(),
    m5.blockStatement(
      m5.anyList(
        m5.zeroOrMore(),
        infiniteLoop(
          m5.matcher((node) => {
            return m5.containerOf(callExpression5(m5.identifier("parseInt"))).match(node) && m5.blockStatement([
              m5.tryStatement(
                m5.containerOf(pushShift),
                m5.containerOf(pushShift)
              )
            ]).match(node);
          })
        )
      )
    )
  );
  const matcher17 = m5.expressionStatement(
    m5.or(callMatcher, m5.unaryExpression("!", callMatcher))
  );
  for (const ref of stringArray.references) {
    const rotator = findParent(ref, matcher17);
    if (rotator) {
      return rotator;
    }
  }
}

// src/deobfuscate/control-flow-object.ts
import * as t5 from "@babel/types";
import * as m6 from "@codemod/matchers";
var control_flow_object_default = {
  name: "control-flow-object",
  tags: ["safe"],
  scope: true,
  visitor() {
    const varId = m6.capture(m6.identifier());
    const propertyName = m6.matcher((name) => /^[a-z]{5}$/i.test(name));
    const propertyKey = constKey(propertyName);
    const propertyValue = m6.or(
      // E.g. "6|0|4|3|1|5|2"
      m6.stringLiteral(),
      // E.g. function (a, b) { return a + b }
      m6.matcher((node) => {
        return t5.isFunctionExpression(node) && node.params.length >= 2 && createFunctionMatcher(node.params.length, (left, right) => [
          m6.returnStatement(
            m6.or(
              m6.binaryExpression(void 0, left, right),
              m6.logicalExpression(void 0, left, right),
              m6.binaryExpression(void 0, right, left),
              m6.logicalExpression(void 0, right, left)
            )
          )
        ]).match(node);
      }),
      // E.g. function (a, b, c) { return a(b, c) } with an arbitrary number of arguments
      m6.matcher((node) => {
        return t5.isFunctionExpression(node) && createFunctionMatcher(node.params.length, (...params) => [
          m6.returnStatement(m6.callExpression(params[0], params.slice(1)))
        ]).match(node);
      }),
      // E.g. function (a, ...b) { return a(...b) }
      (() => {
        const fnName = m6.capture(m6.identifier());
        const restName = m6.capture(m6.identifier());
        return m6.functionExpression(
          void 0,
          [fnName, m6.restElement(restName)],
          m6.blockStatement([
            m6.returnStatement(
              m6.callExpression(m6.fromCapture(fnName), [
                m6.spreadElement(m6.fromCapture(restName))
              ])
            )
          ])
        );
      })()
    );
    const objectProperties = m6.capture(
      m6.arrayOf(m6.objectProperty(propertyKey, propertyValue))
    );
    const aliasId = m6.capture(m6.identifier());
    const aliasVar = declarationOrAssignment(aliasId, m6.fromCapture(varId));
    const assignedKey = m6.capture(propertyName);
    const assignedValue = m6.capture(propertyValue);
    const assignment = m6.expressionStatement(
      m6.assignmentExpression(
        "=",
        constMemberExpression(m6.fromCapture(varId), assignedKey),
        assignedValue
      )
    );
    const looseAssignment = m6.expressionStatement(
      m6.assignmentExpression(
        "=",
        constMemberExpression(m6.fromCapture(varId), assignedKey)
      )
    );
    const memberAccess = constMemberExpression(
      m6.or(m6.fromCapture(varId), m6.fromCapture(aliasId)),
      propertyName
    );
    const varMatcher = declaratorOrAssignmentExpression(
      varId,
      m6.objectExpression(objectProperties)
    );
    const inlineMatcher = constMemberExpression(
      m6.objectExpression(objectProperties),
      propertyName
    );
    function transform(path) {
      let changes = 0;
      if (varMatcher.match(path.node)) {
        const binding = path.scope.getBinding(varId.current.name);
        if (!binding) return changes;
        if (!isConstantBinding(binding)) return changes;
        if (!transformObjectKeys(binding)) return changes;
        if (!isReadonlyObject(binding, memberAccess, false)) return changes;
        const props = new Map(
          objectProperties.current.map((p) => [
            getPropName(p.key),
            p.value
          ])
        );
        if (!props.size) return changes;
        const oldRefs = [...binding.referencePaths];
        let failed = 0;
        [...binding.referencePaths].reverse().forEach((ref) => {
          const memberPath = ref.parentPath;
          const propName = getPropName(memberPath.node.property);
          if (propName === void 0) {
            failed++;
            return;
          }
          const value = props.get(propName);
          if (!value) {
            ref.addComment("leading", "webcrack:control_flow_missing_prop");
            return;
          }
          if (t5.isStringLiteral(value)) {
            memberPath.replaceWith(value);
          } else {
            inlineFunctionCall(
              value,
              memberPath.parentPath
            );
          }
          changes++;
        });
        oldRefs.forEach((ref) => {
          const varDeclarator = findParent(ref, m6.variableDeclarator());
          if (varDeclarator) changes += transform(varDeclarator);
        });
        if (!failed) path.remove();
        changes++;
      }
      return changes;
    }
    function transformObjectKeys(objBinding) {
      const path = objBinding.kind === "param" ? objBinding.constantViolations[0].parentPath : objBinding.path.parentPath;
      const container = path.container;
      const startIndex = path.key + 1;
      const properties = [];
      for (let i = startIndex; i < container.length; i++) {
        const statement5 = container[i];
        if (looseAssignment.match(statement5)) {
          applyTransform(statement5, merge_strings_default);
        }
        if (assignment.match(statement5)) {
          properties.push(
            t5.objectProperty(
              t5.identifier(assignedKey.current),
              assignedValue.current
            )
          );
        } else {
          break;
        }
      }
      const aliasAssignment = container[startIndex + properties.length];
      if (!aliasVar.match(aliasAssignment)) return true;
      if (objBinding.references !== properties.length + 1) return false;
      const aliasBinding = objBinding.scope.getBinding(aliasId.current.name);
      if (!isReadonlyObject(aliasBinding, memberAccess, false)) return false;
      objectProperties.current.push(...properties);
      container.splice(startIndex, properties.length);
      objBinding.referencePaths = aliasBinding.referencePaths;
      objBinding.references = aliasBinding.references;
      objBinding.identifier.name = aliasBinding.identifier.name;
      aliasBinding.path.remove();
      return true;
    }
    return {
      Expression: {
        exit(path) {
          this.changes += transform(path);
        }
      },
      VariableDeclarator: {
        exit(path) {
          this.changes += transform(path);
        }
      },
      MemberExpression: {
        exit(path) {
          if (!inlineMatcher.match(path.node)) return;
          const propName = getPropName(path.node.property);
          const value = objectProperties.current.find(
            (prop) => getPropName(prop.key) === propName
          )?.value;
          if (!value) return;
          if (t5.isStringLiteral(value)) {
            path.replaceWith(value);
          } else if (path.parentPath.isCallExpression()) {
            inlineFunctionCall(value, path.parentPath);
          } else {
            path.replaceWith(value);
          }
          this.changes++;
        }
      }
    };
  }
};

// src/deobfuscate/control-flow-switch.ts
import * as t6 from "@babel/types";
import * as m7 from "@codemod/matchers";
var control_flow_switch_default = {
  name: "control-flow-switch",
  tags: ["safe"],
  visitor() {
    const sequenceName = m7.capture(m7.identifier());
    const sequenceString = m7.capture(
      m7.matcher((s) => /^\d+(\|\d+)*$/.test(s))
    );
    const iterator = m7.capture(m7.identifier());
    const assignment = m7.capture(
      declarationOrAssignment(
        sequenceName,
        m7.callExpression(
          constMemberExpression(m7.stringLiteral(sequenceString), "split"),
          [m7.stringLiteral("|")]
        )
      )
    );
    const cases = m7.capture(
      m7.arrayOf(
        m7.switchCase(
          m7.stringLiteral(m7.matcher((s) => /^\d+$/.test(s))),
          m7.zeroOrMore()
        )
      )
    );
    const matcher17 = m7.blockStatement(
      m7.anyList(
        m7.zeroOrMore(),
        // E.g. const sequence = "2|4|3|0|1".split("|")
        assignment,
        // E.g. let iterator = 0 or -0x1a70 + 0x93d + 0x275 * 0x7
        declarationOrAssignment(iterator, m7.anything()),
        infiniteLoop(
          m7.blockStatement([
            m7.switchStatement(
              // E.g. switch (sequence[iterator++]) {
              m7.memberExpression(
                m7.fromCapture(sequenceName),
                m7.updateExpression("++", m7.fromCapture(iterator)),
                true
              ),
              cases
            ),
            m7.breakStatement()
          ])
        ),
        m7.zeroOrMore()
      )
    );
    return {
      BlockStatement: {
        exit(path) {
          if (!matcher17.match(path.node)) return;
          let heading = 0;
          for (; path.node.body[heading] !== assignment.current && heading < path.node.body.length; heading++);
          const caseStatements = new Map(
            cases.current.map((c) => [
              c.test.value,
              t6.isContinueStatement(c.consequent.at(-1)) ? c.consequent.slice(0, -1) : c.consequent
            ])
          );
          const sequence = sequenceString.current.split("|");
          const newStatements = sequence.flatMap((s) => caseStatements.get(s));
          path.node.body.splice(heading, 3, ...newStatements);
          this.changes += newStatements.length + 3;
        }
      }
    };
  }
};

// src/deobfuscate/dead-code.ts
import * as t7 from "@babel/types";
import * as m8 from "@codemod/matchers";
var dead_code_default = {
  name: "dead-code",
  tags: ["unsafe"],
  scope: true,
  visitor() {
    const stringComparison = m8.binaryExpression(
      m8.or("===", "==", "!==", "!="),
      m8.stringLiteral(),
      m8.stringLiteral()
    );
    const testMatcher = m8.or(
      stringComparison,
      m8.unaryExpression("!", stringComparison)
    );
    return {
      "IfStatement|ConditionalExpression": {
        exit(_path) {
          const path = _path;
          if (!testMatcher.match(path.node.test)) return;
          if (path.get("test").evaluateTruthy()) {
            replace(path, path.get("consequent"));
          } else if (path.node.alternate) {
            replace(path, path.get("alternate"));
          } else {
            path.remove();
          }
          this.changes++;
        }
      }
    };
  }
};
function replace(path, replacement) {
  if (t7.isBlockStatement(replacement.node)) {
    const childBindings = replacement.scope.bindings;
    for (const name in childBindings) {
      const binding = childBindings[name];
      if (path.scope.hasOwnBinding(name)) {
        renameFast(binding, path.scope.generateUid(name));
      }
      binding.scope = path.scope;
      path.scope.bindings[binding.identifier.name] = binding;
    }
    path.replaceWithMultiple(replacement.node.body);
  } else {
    path.replaceWith(replacement);
  }
}

// src/deobfuscate/decoder.ts
import { expression } from "@babel/template";
import * as m9 from "@codemod/matchers";
var Decoder = class {
  originalName;
  name;
  path;
  constructor(originalName, name, path) {
    this.originalName = originalName;
    this.name = name;
    this.path = path;
  }
  collectCalls() {
    const calls = [];
    const literalArgument = m9.or(
      m9.binaryExpression(
        m9.anything(),
        m9.matcher((node) => literalArgument.match(node)),
        m9.matcher((node) => literalArgument.match(node))
      ),
      m9.unaryExpression(
        "-",
        m9.matcher((node) => literalArgument.match(node))
      ),
      m9.numericLiteral(),
      m9.stringLiteral()
    );
    const literalCall = m9.callExpression(
      m9.identifier(this.name),
      m9.arrayOf(literalArgument)
    );
    const expressionCall = m9.callExpression(
      m9.identifier(this.name),
      m9.arrayOf(m9.anyExpression())
    );
    const conditional = m9.capture(m9.conditionalExpression());
    const conditionalCall = m9.callExpression(m9.identifier(this.name), [
      conditional
    ]);
    const buildExtractedConditional = expression`TEST ? CALLEE(CONSEQUENT) : CALLEE(ALTERNATE)`;
    const binding = this.path.scope.getBinding(this.name);
    for (const ref of binding.referencePaths) {
      if (conditionalCall.match(ref.parent)) {
        const [replacement] = ref.parentPath.replaceWith(
          buildExtractedConditional({
            TEST: conditional.current.test,
            CALLEE: ref.parent.callee,
            CONSEQUENT: conditional.current.consequent,
            ALTERNATE: conditional.current.alternate
          })
        );
        replacement.scope.crawl();
      } else if (literalCall.match(ref.parent)) {
        calls.push(ref.parentPath);
      } else if (expressionCall.match(ref.parent)) {
        ref.parentPath.traverse({
          ReferencedIdentifier(path) {
            const varBinding = path.scope.getBinding(path.node.name);
            if (!varBinding) return;
            inlineVariable(varBinding, literalArgument, true);
          }
        });
        if (literalCall.match(ref.parent)) {
          calls.push(ref.parentPath);
        }
      } else if (ref.parentPath?.isExpressionStatement()) {
        ref.parentPath.remove();
      }
    }
    return calls;
  }
};
function findDecoders(stringArray) {
  const decoders = [];
  const functionName = m9.capture(m9.anyString());
  const arrayIdentifier = m9.capture(m9.identifier());
  const matcher17 = m9.functionDeclaration(
    m9.identifier(functionName),
    m9.anything(),
    m9.blockStatement(
      m9.or(
        anySubList(
          // var array = getStringArray();
          declarationOrAssignment(
            arrayIdentifier,
            m9.callExpression(m9.identifier(stringArray.name))
          ),
          // var h = array[e]; return h;
          // or return array[e -= 254];
          m9.containerOf(
            m9.memberExpression(m9.fromCapture(arrayIdentifier), void 0, true)
          )
        ),
        anySubList(
          // var h = stringArray[e]; return h;
          m9.containerOf(
            m9.memberExpression(m9.identifier(stringArray.name), void 0, true)
          )
        )
      )
    )
  );
  for (const ref of stringArray.references) {
    const decoderFn = findParent(ref, matcher17);
    if (decoderFn) {
      const oldName = functionName.current;
      const newName = `__DECODE_${decoders.length}__`;
      const binding = decoderFn.scope.getBinding(oldName);
      renameFast(binding, newName);
      decoders.push(new Decoder(oldName, newName, decoderFn));
    }
  }
  return decoders;
}

// src/deobfuscate/inline-decoded-strings.ts
import * as t8 from "@babel/types";
var inline_decoded_strings_default = {
  name: "inline-decoded-strings",
  tags: ["unsafe"],
  scope: true,
  async run(ast, state, options) {
    if (!options) return;
    const calls = options.vm.decoders.flatMap(
      (decoder) => decoder.collectCalls()
    );
    const decodedValues = await options.vm.decode(calls);
    for (let i = 0; i < calls.length; i++) {
      const call = calls[i];
      const value = decodedValues[i];
      call.replaceWith(t8.valueToNode(value));
      if (typeof value !== "string")
        call.addComment("leading", "webcrack:decode_error");
    }
    state.changes += calls.length;
  }
};

// src/deobfuscate/inline-decoder-wrappers.ts
var inline_decoder_wrappers_default = {
  name: "inline-decoder-wrappers",
  tags: ["unsafe"],
  scope: true,
  run(ast, state, decoder) {
    if (!decoder?.node.id) return;
    const decoderName = decoder.node.id.name;
    const decoderBinding = decoder.parentPath.scope.getBinding(decoderName);
    if (decoderBinding) {
      state.changes += inlineVariableAliases(decoderBinding).changes;
      state.changes += inlineFunctionAliases(decoderBinding).changes;
    }
  }
};

// src/deobfuscate/inline-object-props.ts
import * as m10 from "@codemod/matchers";
var inline_object_props_default = {
  name: "inline-object-props",
  tags: ["safe"],
  scope: true,
  visitor() {
    const varId = m10.capture(m10.identifier());
    const propertyName = m10.capture(
      m10.matcher((name) => /^[\w]+$/i.test(name))
    );
    const propertyKey = constKey(propertyName);
    const objectProperties = m10.capture(
      m10.arrayOf(
        m10.objectProperty(
          propertyKey,
          m10.or(m10.stringLiteral(), m10.numericLiteral())
        )
      )
    );
    const memberAccess = constMemberExpression(
      m10.fromCapture(varId),
      propertyName
    );
    const varMatcher = m10.variableDeclarator(
      varId,
      m10.objectExpression(objectProperties)
    );
    const literalMemberAccess = constMemberExpression(
      m10.objectExpression(objectProperties),
      propertyName
    );
    return {
      MemberExpression(path) {
        if (!literalMemberAccess.match(path.node)) return;
        const property = objectProperties.current.find(
          (p) => getPropName(p.key) === propertyName.current
        );
        if (!property) return;
        path.replaceWith(property.value);
        this.changes++;
      },
      VariableDeclarator(path) {
        if (!varMatcher.match(path.node)) return;
        if (objectProperties.current.length === 0) return;
        const binding = path.scope.getBinding(varId.current.name);
        if (!binding || !isReadonlyObject(binding, memberAccess)) return;
        inlineObjectProperties(
          binding,
          m10.objectProperty(
            propertyKey,
            m10.or(m10.stringLiteral(), m10.numericLiteral())
          )
        );
        this.changes++;
      }
    };
  }
};

// src/deobfuscate/string-array.ts
import * as t9 from "@babel/types";
import * as m11 from "@codemod/matchers";
import debug2 from "debug";
function findStringArray(ast) {
  let results = [];
  const functionName = m11.capture(m11.anyString());
  const arrayIdentifier = m11.capture(m11.identifier());
  const arrayExpression12 = m11.capture(
    m11.or(
      // ["hello", "world"]
      m11.arrayExpression(m11.arrayOf(m11.or(m11.stringLiteral(), undefinedMatcher))),
      // "hello,world".split(",")
      m11.callExpression(constMemberExpression(m11.stringLiteral(), "split"), [
        m11.stringLiteral()
      ])
    )
  );
  const functionAssignment = m11.assignmentExpression(
    "=",
    m11.identifier(m11.fromCapture(functionName)),
    m11.functionExpression(
      void 0,
      m11.zeroOrMore(),
      m11.blockStatement([m11.returnStatement(m11.fromCapture(arrayIdentifier))])
    )
  );
  const variableDeclaration16 = declarationOrAssignment(
    arrayIdentifier,
    arrayExpression12
  );
  const matcher17 = m11.functionDeclaration(
    m11.identifier(functionName),
    m11.zeroOrMore(),
    m11.or(
      // var array = ["hello", "world"];
      // return (getStringArray = function () { return array; })();
      m11.blockStatement([
        variableDeclaration16,
        m11.returnStatement(m11.callExpression(functionAssignment))
      ]),
      // var array = ["hello", "world"];
      // getStringArray = function () { return array; });
      // return getStringArray();
      m11.blockStatement([
        variableDeclaration16,
        m11.expressionStatement(functionAssignment),
        m11.returnStatement(m11.callExpression(m11.identifier(functionName)))
      ])
    )
  );
  function getArray() {
    const current = arrayExpression12.current;
    if (current.type === "ArrayExpression") {
      return current;
    }
    const split = current.arguments[0];
    const content = current.callee.object;
    const elements = content.value.split(split.value).map((v) => t9.stringLiteral(v));
    return t9.arrayExpression(elements);
  }
  traverse_default(ast, {
    // Wrapped string array from later javascript-obfuscator versions
    FunctionDeclaration(path) {
      if (matcher17.match(path.node)) {
        const length = getArray().elements.length;
        const logger2 = debug2("webcrack:deobfuscate");
        logger2(`String Array: ${functionName.current}, length ${length}`);
        const name = functionName.current;
        const binding = path.scope.getBinding(name);
        const newName = `__STRING_ARRAY_${results.length}__`;
        renameFast(binding, newName);
        results.push({
          path,
          references: binding.referencePaths,
          originalName: name,
          name: newName,
          length
        });
      }
    },
    // Simple string array inlining (only `array[0]`, `array[1]` etc references, no rotating/decoding).
    // May be used by older or different obfuscators
    VariableDeclaration(path) {
      if (!variableDeclaration16.match(path.node)) return;
      const array = getArray();
      const length = array.elements.length;
      const binding = path.scope.getBinding(arrayIdentifier.current.name);
      const memberAccess = m11.memberExpression(
        m11.fromCapture(arrayIdentifier),
        m11.numericLiteral(m11.matcher((value) => value < length))
      );
      if (!binding.referenced || array.elements.length === 0) return;
      if (isReadonlyObject(binding, memberAccess)) {
        inlineArrayElements(array, binding.referencePaths);
        path.remove();
      } else {
        const length2 = getArray().elements.length;
        const logger2 = debug2("webcrack:deobfuscate");
        logger2(`String Array: ${binding.identifier.name}, length ${length2}`);
        const newName = `__STRING_ARRAY_${results.length}__`;
        renameFast(binding, newName);
        results.push({
          path,
          references: binding.referencePaths,
          originalName: binding.identifier.name,
          name: newName,
          length: length2,
          risky: true
        });
      }
    }
  });
  return results;
}

// src/deobfuscate/vm.ts
import debug3 from "debug";
function createNodeSandbox() {
  return async (code) => {
    const {
      default: { Isolate }
    } = await import("isolated-vm");
    const isolate = new Isolate();
    const context = await isolate.createContext();
    const result = await context.eval(code, {
      timeout: 1e4,
      copy: true,
      filename: "file:///obfuscated.js"
    });
    context.release();
    isolate.dispose();
    return result;
  };
}
function createBrowserSandbox() {
  return () => {
    throw new Error("Custom Sandbox implementation required.");
  };
}
var VMDecoder = class {
  decoders;
  setupCode;
  sandbox;
  constructor(sandbox, stringArray, decoders, rotator) {
    this.sandbox = sandbox;
    this.decoders = decoders;
    const generateOptions = {
      compact: true,
      shouldPrintComment: () => false
    };
    const stringArrayCode = generate(stringArray.path.node, generateOptions);
    const rotatorCode = rotator ? generate(rotator.node, generateOptions) : "";
    const decoderCode = decoders.map((decoder) => generate(decoder.path.node, generateOptions)).join(";\n");
    this.setupCode = [stringArrayCode, rotatorCode, decoderCode].join(";\n");
  }
  async decode(calls) {
    const code = `(() => {
      ${this.setupCode}
      return [${calls.join(",")}]
    })()`;
    debug3("webcrack:deobfuscate")("vm code:", code);
    try {
      const result = await this.sandbox(code);
      return result;
    } catch (error) {
      debug3("webcrack:deobfuscate")("vm code:", code);
      if (error instanceof Error && (error.message.includes("undefined symbol") || error.message.includes("Segmentation fault"))) {
        throw new Error(
          "isolated-vm version mismatch. Check https://webcrack.netlify.app/docs/guide/common-errors.html#isolated-vm",
          { cause: error }
        );
      }
      throw error;
    }
  }
};

// src/deobfuscate/constant-array.ts
import * as t10 from "@babel/types";
import * as m12 from "@codemod/matchers";
var constant_array_default = {
  name: "constant-array",
  tags: ["unsafe"],
  scope: true,
  visitor() {
    const arrayIdentifier = m12.capture(m12.identifier());
    const arrayExpression12 = m12.capture(
      m12.or(
        // ["hello", "world"]
        m12.arrayExpression(
          m12.arrayOf(
            m12.or(
              m12.stringLiteral(),
              m12.numericLiteral(),
              m12.nullLiteral(),
              m12.regExpLiteral(),
              undefinedMatcher
            )
          )
        ),
        // "hello,world".split(",")
        m12.callExpression(constMemberExpression(m12.stringLiteral(), "split"), [
          m12.stringLiteral()
        ])
      )
    );
    const variableDeclaration16 = declaratorOrAssignmentExpression(
      arrayIdentifier,
      arrayExpression12
    );
    function getArray() {
      const current = arrayExpression12.current;
      if (current.type === "ArrayExpression") {
        return current;
      }
      const split = current.arguments[0];
      const content = current.callee.object;
      const elements = content.value.split(split.value).map((v) => t10.stringLiteral(v));
      return t10.arrayExpression(elements);
    }
    function inline(path) {
      if (!variableDeclaration16.match(path.node)) return 0;
      const array = getArray();
      const length = array.elements.length;
      const binding = path.scope.getBinding(arrayIdentifier.current.name);
      const memberAccess = m12.memberExpression(
        m12.fromCapture(arrayIdentifier),
        m12.numericLiteral(m12.matcher((value) => value < length))
      );
      if (!binding.referenced || !isReadonlyObject(binding, memberAccess))
        return 0;
      inlineArrayElements(array, binding.referencePaths);
      path.remove();
      return 1;
    }
    return {
      // Simple string array inlining (only `array[0]`, `array[1]` etc references, no rotating/decoding).
      AssignmentExpression: {
        exit(path) {
          this.changes += inline(path);
        }
      },
      VariableDeclarator: {
        exit(path) {
          this.changes += inline(path);
        }
      }
    };
  }
};

// src/deobfuscate/index.ts
var deobfuscate_default = {
  name: "deobfuscate",
  tags: ["unsafe"],
  scope: true,
  async run(ast, state, sandbox) {
    if (!sandbox) return;
    const logger2 = debug4("webcrack:deobfuscate");
    const stringArrays = findStringArray(ast);
    if (stringArrays.length === 0) {
      logger2("No string array found");
    }
    logger2("String Arrays:", stringArrays);
    for (const stringArray of stringArrays) {
      logger2(
        `String Array: ${stringArray.originalName}, length ${stringArray.length}`
      );
      const rotator = findArrayRotator(stringArray);
      logger2(`String Array Rotate: ${rotator ? "yes" : "no"}`);
      const decoders = findDecoders(stringArray);
      logger2(
        `String Array Decoders: ${decoders.map((d) => d.originalName).join(", ")}`
      );
      if (stringArray.risky && !rotator) {
        logger2("Skipping risky string array without decoders");
        continue;
      }
      state.changes += applyTransform(ast, inline_object_props_default).changes;
      for (const decoder of decoders) {
        state.changes += applyTransform(
          ast,
          inline_decoder_wrappers_default,
          decoder.path
        ).changes;
      }
      const vm = new VMDecoder(sandbox, stringArray, decoders, rotator);
      state.changes += (await applyTransformAsync(ast, inline_decoded_strings_default, { vm })).changes;
      if (decoders.length > 0) {
        stringArray.path.remove();
        rotator?.remove();
        decoders.forEach((decoder) => decoder.path.remove());
        state.changes += 2 + decoders.length;
      }
    }
    state.changes += applyTransforms(
      ast,
      [
        constant_array_default,
        merge_strings_default,
        dead_code_default,
        control_flow_object_default,
        control_flow_switch_default
      ],
      { noScope: true }
    ).changes;
  }
};

// src/deobfuscate/debug-protection.ts
import * as m13 from "@codemod/matchers";
import { ifStatement as ifStatement2 } from "@codemod/matchers";
var debug_protection_default = {
  name: "debug-protection",
  tags: ["safe"],
  scope: true,
  visitor() {
    const ret = m13.capture(m13.identifier());
    const debugProtectionFunctionName = m13.capture(m13.anyString());
    const debuggerProtection = m13.capture(m13.identifier());
    const counter = m13.capture(m13.identifier());
    const debuggerTemplate = m13.ifStatement(
      void 0,
      void 0,
      m13.containerOf(
        m13.or(
          m13.debuggerStatement(),
          m13.callExpression(
            constMemberExpression(m13.anyExpression(), "constructor"),
            [m13.stringLiteral("debugger")]
          )
        )
      )
    );
    const intervalCall = m13.callExpression(
      constMemberExpression(m13.anyExpression(), "setInterval"),
      [
        m13.identifier(m13.fromCapture(debugProtectionFunctionName)),
        m13.numericLiteral()
      ]
    );
    const matcher17 = m13.functionDeclaration(
      m13.identifier(debugProtectionFunctionName),
      [ret],
      m13.blockStatement([
        // function debuggerProtection (counter) {
        m13.functionDeclaration(
          debuggerProtection,
          [counter],
          m13.blockStatement([
            debuggerTemplate,
            // debuggerProtection(++counter);
            m13.expressionStatement(
              m13.callExpression(m13.fromCapture(debuggerProtection), [
                m13.updateExpression("++", m13.fromCapture(counter), true)
              ])
            )
          ])
        ),
        m13.tryStatement(
          m13.blockStatement([
            // if (ret) {
            ifStatement2(
              m13.fromCapture(ret),
              // return debuggerProtection;
              m13.blockStatement([
                m13.returnStatement(m13.fromCapture(debuggerProtection))
              ]),
              // } else { debuggerProtection(0); }
              m13.blockStatement([
                m13.expressionStatement(
                  m13.callExpression(m13.fromCapture(debuggerProtection), [
                    m13.numericLiteral(0)
                  ])
                )
              ])
            )
          ])
        )
      ])
    );
    return {
      FunctionDeclaration(path) {
        if (!matcher17.match(path.node)) return;
        const binding = path.scope.getBinding(
          debugProtectionFunctionName.current
        );
        binding?.referencePaths.forEach((ref) => {
          if (intervalCall.match(ref.parent)) {
            findParent(ref, iife())?.remove();
          }
        });
        path.remove();
      }
    };
  }
};

// src/deobfuscate/evaluate-globals.ts
import * as t11 from "@babel/types";
import * as m14 from "@codemod/matchers";
var FUNCTIONS = {
  atob,
  unescape,
  decodeURI,
  decodeURIComponent
};
var evaluate_globals_default = {
  name: "evaluate-globals",
  tags: ["safe"],
  scope: true,
  visitor() {
    const name = m14.capture(
      m14.or(...Object.keys(FUNCTIONS))
    );
    const arg = m14.capture(m14.anyString());
    const matcher17 = m14.callExpression(m14.identifier(name), [
      m14.stringLiteral(arg)
    ]);
    return {
      CallExpression: {
        exit(path) {
          if (!matcher17.match(path.node)) return;
          if (path.scope.hasBinding(name.current, { noGlobals: true })) return;
          try {
            const value = FUNCTIONS[name.current].call(
              globalThis,
              arg.current
            );
            path.replaceWith(t11.stringLiteral(value));
            this.changes++;
          } catch {
          }
        }
      }
    };
  }
};

// src/deobfuscate/merge-object-assignments.ts
import * as t12 from "@babel/types";
import * as m15 from "@codemod/matchers";
var merge_object_assignments_default = {
  name: "merge-object-assignments",
  tags: ["safe"],
  scope: true,
  visitor: () => {
    const id = m15.capture(m15.identifier());
    const object = m15.capture(m15.objectExpression([]));
    const varMatcher = m15.variableDeclaration(void 0, [
      m15.variableDeclarator(id, object)
    ]);
    const key = m15.capture(m15.anyExpression());
    const computed = m15.capture(m15.anything());
    const value = m15.capture(m15.anyExpression());
    const assignmentMatcher = m15.expressionStatement(
      m15.assignmentExpression(
        "=",
        m15.memberExpression(m15.fromCapture(id), key, computed),
        value
      )
    );
    return {
      Program(path) {
        path.scope.crawl();
      },
      VariableDeclaration: {
        exit(path) {
          if (!path.inList || !varMatcher.match(path.node)) return;
          const binding = path.scope.getBinding(id.current.name);
          const container = path.container;
          const siblingIndex = path.key + 1;
          while (siblingIndex < container.length) {
            const sibling = path.getSibling(siblingIndex);
            if (!assignmentMatcher.match(sibling.node) || hasCircularReference(value.current, binding))
              return;
            const isComputed = computed.current && key.current.type !== "NumericLiteral" && key.current.type !== "StringLiteral";
            object.current.properties.push(
              t12.objectProperty(key.current, value.current, isComputed)
            );
            sibling.remove();
            binding.dereference();
            binding.referencePaths.shift();
            if (binding.references === 1 && inlineableObject.match(object.current) && !isRepeatedCallReference(binding, binding.referencePaths[0])) {
              binding.referencePaths[0].replaceWith(object.current);
              path.remove();
              this.changes++;
            }
          }
        }
      }
    };
  }
};
function hasCircularReference(node, binding) {
  return (
    // obj.foo = obj;
    binding.referencePaths.some((path) => path.find((p) => p.node === node)) || // obj.foo = fn(); where fn could reference the binding or not, for simplicity we assume it does.
    m15.containerOf(m15.callExpression()).match(node)
  );
}
var repeatedCallMatcher = m15.or(
  m15.forStatement(),
  m15.forOfStatement(),
  m15.forInStatement(),
  m15.whileStatement(),
  m15.doWhileStatement(),
  m15.function(),
  m15.objectMethod(),
  m15.classBody()
);
function isRepeatedCallReference(binding, reference) {
  const block = binding.scope.getBlockParent().path;
  const repeatable = findParent(reference, repeatedCallMatcher);
  return repeatable?.isDescendant(block);
}
var inlineableObject = m15.matcher(
  (node) => m15.or(
    safeLiteral,
    m15.arrayExpression(m15.arrayOf(inlineableObject)),
    m15.objectExpression(m15.arrayOf(constObjectProperty(inlineableObject)))
  ).match(node)
);

// src/deobfuscate/self-defending.ts
import * as m16 from "@codemod/matchers";
var self_defending_default = {
  name: "self-defending",
  tags: ["safe"],
  scope: true,
  visitor() {
    const callController = m16.capture(m16.anyString());
    const firstCall = m16.capture(m16.identifier());
    const rfn = m16.capture(m16.identifier());
    const context = m16.capture(m16.identifier());
    const res = m16.capture(m16.identifier());
    const fn = m16.capture(m16.identifier());
    const matcher17 = m16.variableDeclarator(
      m16.identifier(callController),
      iife(
        [],
        m16.blockStatement([
          // let firstCall = true;
          m16.variableDeclaration(void 0, [
            m16.variableDeclarator(firstCall, trueMatcher)
          ]),
          // return function (context, fn) {
          m16.returnStatement(
            m16.functionExpression(
              null,
              [context, fn],
              m16.blockStatement([
                m16.variableDeclaration(void 0, [
                  // const rfn = firstCall ? function() {
                  m16.variableDeclarator(
                    rfn,
                    m16.conditionalExpression(
                      m16.fromCapture(firstCall),
                      m16.functionExpression(
                        null,
                        [],
                        m16.blockStatement([
                          // if (fn) {
                          m16.ifStatement(
                            m16.fromCapture(fn),
                            m16.blockStatement([
                              // const res = fn.apply(context, arguments);
                              m16.variableDeclaration(void 0, [
                                m16.variableDeclarator(
                                  res,
                                  m16.callExpression(
                                    constMemberExpression(
                                      m16.fromCapture(fn),
                                      "apply"
                                    ),
                                    [
                                      m16.fromCapture(context),
                                      m16.identifier("arguments")
                                    ]
                                  )
                                )
                              ]),
                              // fn = null;
                              m16.expressionStatement(
                                m16.assignmentExpression(
                                  "=",
                                  m16.fromCapture(fn),
                                  m16.nullLiteral()
                                )
                              ),
                              // return res;
                              m16.returnStatement(m16.fromCapture(res))
                            ])
                          )
                        ])
                      ),
                      // : function() {}
                      m16.functionExpression(null, [], m16.blockStatement([]))
                    )
                  )
                ]),
                // firstCall = false;
                m16.expressionStatement(
                  m16.assignmentExpression(
                    "=",
                    m16.fromCapture(firstCall),
                    falseMatcher
                  )
                ),
                // return rfn;
                m16.returnStatement(m16.fromCapture(rfn))
              ])
            )
          )
        ])
      )
    );
    const emptyIife = iife([], m16.blockStatement([]));
    return {
      VariableDeclarator(path) {
        if (!matcher17.match(path.node)) return;
        const binding = path.scope.getBinding(callController.current);
        if (!binding) return;
        binding.referencePaths.filter((ref) => ref.parent.type === "CallExpression").forEach((ref) => {
          if (ref.parentPath?.parent.type === "CallExpression") {
            ref.parentPath.parentPath?.remove();
          } else {
            removeSelfDefendingRefs(ref);
          }
          findParent(ref, emptyIife)?.remove();
          this.changes++;
        });
        path.remove();
        this.changes++;
      }
    };
  }
};
function removeSelfDefendingRefs(path) {
  const varName = m16.capture(m16.anyString());
  const varMatcher = m16.variableDeclarator(
    m16.identifier(varName),
    m16.callExpression(m16.identifier(path.node.name))
  );
  const callMatcher = m16.expressionStatement(
    m16.callExpression(m16.identifier(m16.fromCapture(varName)), [])
  );
  const varDecl = findParent(path, varMatcher);
  if (varDecl) {
    const binding = varDecl.scope.getBinding(varName.current);
    binding?.referencePaths.forEach((ref) => {
      if (callMatcher.match(ref.parentPath?.parent))
        ref.parentPath?.parentPath?.remove();
    });
    varDecl.remove();
  }
}

// src/deobfuscate/var-functions.ts
import * as t13 from "@babel/types";
import * as m17 from "@codemod/matchers";
var var_functions_default = {
  name: "var-functions",
  tags: ["unsafe"],
  visitor() {
    const name = m17.capture(m17.identifier());
    const fn = m17.capture(m17.functionExpression(null));
    const matcher17 = m17.variableDeclaration("var", [
      m17.variableDeclarator(name, fn)
    ]);
    return {
      VariableDeclaration: {
        exit(path) {
          if (matcher17.match(path.node) && path.key !== "init") {
            path.replaceWith(
              t13.functionDeclaration(
                name.current,
                fn.current.params,
                fn.current.body,
                fn.current.generator,
                fn.current.async
              )
            );
          }
        }
      }
    };
  }
};

// src/plugin.ts
import { parse } from "@babel/parser";
import template from "@babel/template";
import * as t14 from "@babel/types";
import * as m18 from "@codemod/matchers";
var stages = [
  "parse",
  "prepare",
  "deobfuscate",
  "unminify",
  "unpack"
];
function loadPlugins(plugins) {
  const groups = new Map(
    stages.map((stage) => [stage, []])
  );
  for (const plugin of plugins) {
    const obj = plugin({
      parse,
      types: t14,
      traverse: traverse_default,
      template,
      matchers: m18
    });
    groups.get(obj.runAfter)?.push(obj);
  }
  return Object.fromEntries(
    [...groups].map(([stage, plugins2]) => [
      stage,
      plugins2.length ? async (ast) => {
        const state = { opts: {} };
        for (const transform of plugins2) {
          await transform.pre?.call(state, state);
        }
        const pluginVisitors = plugins2.flatMap(
          (plugin) => plugin.visitor ?? []
        );
        if (pluginVisitors.length > 0) {
          const mergedVisitor = traverse_exports.visitors.merge(pluginVisitors);
          traverse_default(ast, mergedVisitor, void 0, state);
        }
        for (const plugin of plugins2) {
          await plugin.post?.call(state, state);
        }
      } : void 0
    ])
  );
}

// src/transforms/jsx.ts
import * as t15 from "@babel/types";
import * as m19 from "@codemod/matchers";

// src/ast-utils/scope.ts
import { toIdentifier } from "@babel/types";
function generateUid(scope, name = "temp") {
  let uid = "";
  let i = 1;
  do {
    uid = toIdentifier(i > 1 ? `${name}${i}` : name);
    i++;
  } while (scope.hasLabel(uid) || scope.hasBinding(uid) || scope.hasGlobal(uid) || scope.hasReference(uid));
  const program5 = scope.getProgramParent();
  program5.references[uid] = true;
  program5.uids[uid] = true;
  return uid;
}

// src/transforms/jsx.ts
var jsx_default = {
  name: "jsx",
  tags: ["unsafe"],
  scope: true,
  visitor: () => {
    const deepIdentifierMemberExpression = m19.memberExpression(
      m19.or(
        m19.identifier(),
        m19.matcher((node) => deepIdentifierMemberExpression.match(node))
      ),
      m19.identifier(),
      false
    );
    const type = m19.capture(
      m19.or(
        m19.identifier(),
        // React.createElement(Component, ...)
        m19.stringLiteral(),
        // React.createElement('div', ...)
        deepIdentifierMemberExpression
        // React.createElement(Component.SubComponent, ...)
      )
    );
    const props = m19.capture(m19.or(m19.objectExpression(), m19.nullLiteral()));
    const elementMatcher = m19.callExpression(
      constMemberExpression("React", "createElement"),
      m19.anyList(
        type,
        props,
        m19.zeroOrMore(m19.or(m19.anyExpression(), m19.spreadElement()))
      )
    );
    const fragmentMatcher = m19.callExpression(
      constMemberExpression("React", "createElement"),
      m19.anyList(
        constMemberExpression("React", "Fragment"),
        m19.nullLiteral(),
        m19.zeroOrMore(m19.or(m19.anyExpression(), m19.spreadElement()))
      )
    );
    return {
      CallExpression: {
        exit(path) {
          if (fragmentMatcher.match(path.node)) {
            const children = convertChildren(
              path.node.arguments.slice(2)
            );
            const opening = t15.jsxOpeningFragment();
            const closing = t15.jsxClosingFragment();
            const fragment = t15.jsxFragment(opening, closing, children);
            path.node.leadingComments = null;
            path.replaceWith(fragment);
            this.changes++;
          }
          if (elementMatcher.match(path.node)) {
            let name = convertType(type.current);
            if (t15.isIdentifier(type.current) && /^[a-z]/.test(type.current.name)) {
              const binding = path.scope.getBinding(type.current.name);
              if (!binding) return;
              name = t15.jsxIdentifier(generateUid(path.scope, "Component"));
              path.scope.rename(type.current.name, name.name);
            }
            const attributes = t15.isObjectExpression(props.current) ? convertAttributes(props.current) : [];
            const children = convertChildren(
              path.node.arguments.slice(2)
            );
            const selfClosing = children.length === 0;
            const opening = t15.jsxOpeningElement(name, attributes, selfClosing);
            const closing = t15.jsxClosingElement(name);
            const element = t15.jsxElement(opening, closing, children);
            path.node.leadingComments = null;
            path.replaceWith(element);
            this.changes++;
          }
        }
      }
    };
  }
};
function convertType(type) {
  if (t15.isIdentifier(type)) {
    return t15.jsxIdentifier(type.name);
  } else if (t15.isStringLiteral(type)) {
    return t15.jsxIdentifier(type.value);
  } else {
    const object = convertType(
      type.object
    );
    const property = t15.jsxIdentifier(type.property.name);
    return t15.jsxMemberExpression(object, property);
  }
}
function convertAttributes(object) {
  const name = m19.capture(m19.anyString());
  const value = m19.capture(m19.anyExpression());
  const matcher17 = m19.objectProperty(
    m19.or(m19.identifier(name), m19.stringLiteral(name)),
    value
  );
  return object.properties.map((property) => {
    if (matcher17.match(property)) {
      const jsxName = t15.jsxIdentifier(name.current);
      if (value.current.type === "StringLiteral") {
        const hasSpecialChars = /["\\]/.test(value.current.value);
        const jsxValue2 = hasSpecialChars ? t15.jsxExpressionContainer(value.current) : value.current;
        return t15.jsxAttribute(jsxName, jsxValue2);
      }
      const jsxValue = t15.jsxExpressionContainer(value.current);
      return t15.jsxAttribute(jsxName, jsxValue);
    } else if (t15.isSpreadElement(property)) {
      return t15.jsxSpreadAttribute(property.argument);
    } else {
      throw new Error(
        `jsx: property type not implemented ${codePreview(object)}`
      );
    }
  });
}
function convertChildren(children) {
  return children.map((child) => {
    if (t15.isJSXElement(child)) {
      return child;
    } else if (t15.isStringLiteral(child)) {
      const hasSpecialChars = /[{}<>\r\n]/.test(child.value);
      return hasSpecialChars ? t15.jsxExpressionContainer(child) : t15.jsxText(child.value);
    } else if (t15.isSpreadElement(child)) {
      return t15.jsxSpreadChild(child.argument);
    } else {
      return t15.jsxExpressionContainer(child);
    }
  });
}

// src/transforms/jsx-new.ts
import * as t16 from "@babel/types";
import * as m20 from "@codemod/matchers";
var DEFAULT_PRAGMA_CANDIDATES = [
  "jsx",
  "jsxs",
  "_jsx",
  "_jsxs",
  "jsxDEV",
  "jsxsDEV"
];
var jsx_new_default = {
  name: "jsx-new",
  tags: ["unsafe"],
  scope: true,
  visitor: () => {
    const deepIdentifierMemberExpression = m20.memberExpression(
      m20.or(
        m20.identifier(),
        m20.matcher((node) => deepIdentifierMemberExpression.match(node))
      ),
      m20.identifier(),
      false
    );
    const convertibleName = m20.or(
      m20.identifier(),
      // jsx(Component, ...)
      m20.stringLiteral(),
      // jsx('div', ...)
      deepIdentifierMemberExpression
      // jsx(Component.SubComponent, ...)
    );
    const type = m20.capture(m20.anyExpression());
    const fragmentType = constMemberExpression("React", "Fragment");
    const props = m20.capture(m20.objectExpression());
    const key = m20.capture(m20.anyExpression());
    const jsxFunction = m20.capture(m20.or(...DEFAULT_PRAGMA_CANDIDATES));
    const jsxMatcher = m20.callExpression(
      m20.or(
        m20.identifier(jsxFunction),
        m20.sequenceExpression([
          m20.numericLiteral(0),
          constMemberExpression(m20.identifier(), jsxFunction)
        ])
      ),
      m20.anyList(type, props, m20.slice({ min: 0, max: 1, matcher: key }))
    );
    return {
      CallExpression: {
        exit(path) {
          if (!jsxMatcher.match(path.node)) return;
          let name;
          if (convertibleName.match(type.current)) {
            name = convertType2(type.current);
          } else {
            name = t16.jsxIdentifier(generateUid(path.scope, "Component"));
            const componentVar = t16.variableDeclaration("const", [
              t16.variableDeclarator(t16.identifier(name.name), type.current)
            ]);
            path.getStatementParent()?.insertBefore(componentVar);
          }
          const isFragment = fragmentType.match(type.current);
          if (t16.isIdentifier(type.current) && /^[a-z]/.test(type.current.name)) {
            const binding = path.scope.getBinding(type.current.name);
            if (!binding) return;
            name = t16.jsxIdentifier(path.scope.generateUid("Component"));
            path.scope.rename(type.current.name, name.name);
          }
          const attributes = convertAttributes2(props.current);
          if (path.node.arguments.length === 3) {
            attributes.push(
              t16.jsxAttribute(
                t16.jsxIdentifier("key"),
                convertAttributeValue(key.current)
              )
            );
          }
          const children = convertChildren2(
            props.current,
            jsxFunction.current
          );
          if (isFragment && attributes.length === 0) {
            const opening = t16.jsxOpeningFragment();
            const closing = t16.jsxClosingFragment();
            const fragment = t16.jsxFragment(opening, closing, children);
            path.node.leadingComments = null;
            path.replaceWith(fragment);
          } else {
            const selfClosing = children.length === 0;
            const opening = t16.jsxOpeningElement(name, attributes, selfClosing);
            const closing = t16.jsxClosingElement(name);
            const element = t16.jsxElement(opening, closing, children);
            path.node.leadingComments = null;
            path.replaceWith(element);
          }
          this.changes++;
        }
      }
    };
  }
};
function convertType2(type) {
  if (t16.isIdentifier(type)) {
    return t16.jsxIdentifier(type.name);
  } else if (t16.isStringLiteral(type)) {
    return t16.jsxIdentifier(type.value);
  } else {
    const object = convertType2(
      type.object
    );
    const property = t16.jsxIdentifier(type.property.name);
    return t16.jsxMemberExpression(object, property);
  }
}
function convertAttributes2(object) {
  const name = m20.capture(m20.anyString());
  const value = m20.capture(m20.anyExpression());
  const matcher17 = m20.objectProperty(
    m20.or(m20.identifier(name), m20.stringLiteral(name)),
    value
  );
  return object.properties.flatMap((property) => {
    if (matcher17.match(property)) {
      if (name.current === "children") return [];
      const jsxName = t16.jsxIdentifier(name.current);
      const jsxValue = convertAttributeValue(value.current);
      return t16.jsxAttribute(jsxName, jsxValue);
    } else if (t16.isSpreadElement(property)) {
      return t16.jsxSpreadAttribute(property.argument);
    } else {
      throw new Error(
        `jsx: property type not implemented ${codePreview(object)}`
      );
    }
  });
}
function convertAttributeValue(expression3) {
  if (expression3.type === "StringLiteral") {
    const hasSpecialChars = /["\\]/.test(expression3.value);
    return hasSpecialChars ? t16.jsxExpressionContainer(expression3) : expression3;
  }
  return t16.jsxExpressionContainer(expression3);
}
function convertChildren2(object, pragma) {
  const children = m20.capture(m20.anyExpression());
  const matcher17 = m20.objectProperty(
    m20.or(m20.identifier("children"), m20.stringLiteral("children")),
    children
  );
  const prop = object.properties.find((prop2) => matcher17.match(prop2));
  if (!prop) return [];
  if (pragma.includes("jsxs") && t16.isArrayExpression(children.current)) {
    return children.current.elements.map(
      (child) => convertChild(child)
    );
  }
  return [convertChild(children.current)];
}
function convertChild(child) {
  if (t16.isJSXElement(child)) {
    return child;
  } else if (t16.isStringLiteral(child)) {
    const hasSpecialChars = /[{}<>\r\n]/.test(child.value);
    return hasSpecialChars ? t16.jsxExpressionContainer(child) : t16.jsxText(child.value);
  } else {
    return t16.jsxExpressionContainer(child);
  }
}

// src/transforms/mangle.ts
import * as t17 from "@babel/types";
import * as m21 from "@codemod/matchers";
var mangle_default = {
  name: "mangle",
  tags: ["safe"],
  scope: true,
  visitor(match = () => true) {
    return {
      BindingIdentifier: {
        exit(path) {
          if (!path.isBindingIdentifier()) return;
          if (path.parentPath.isImportSpecifier()) return;
          if (path.parentPath.isObjectProperty()) return;
          const matched = match(path.node.name);
          if (!matched) return;
          const binding = path.scope.getBinding(path.node.name);
          if (!binding) return;
          if (binding.referencePaths.some((ref) => ref.isExportNamedDeclaration()))
            return;
          renameFast(binding, inferName(path, matched === "stable"));
        }
      }
    };
  }
};
var requireMatcher = m21.variableDeclarator(
  m21.identifier(),
  m21.callExpression(m21.identifier("require"), [m21.stringLiteral()])
);
function getScopeName(path, stable) {
  if (path.parentPath.isClass({ id: path.node })) {
    return "C" + (stable ? `_${path.parentPath.node.body.body.length}` : "");
  } else if (path.parentPath.isFunction({ id: path.node })) {
    return "f" + (stable ? `_${path.parentPath.node.params.length}` : "");
  } else if (path.listKey === "params" || path.parentPath.isAssignmentPattern({ left: path.node }) && path.parentPath.listKey === "params") {
    return "p";
  } else if (requireMatcher.match(path.parent)) {
    return path.parentPath.get("init.arguments.0").node.value;
  } else if (path.parentPath.isVariableDeclarator({ id: path.node })) {
    const init = path.parentPath.get("init");
    const suffix = init.isExpression() && generateExpressionName(init, stable) || "";
    return "v" + titleCase(suffix);
  } else if (path.parentPath.isCatchClause()) {
    return "e";
  } else if (path.parentPath.isArrayPattern()) {
    return "v";
  } else {
    return null;
  }
}
function inferName(path, stable) {
  let scopeName = getScopeName(path, stable);
  if (scopeName === null) return path.node.name;
  if (stable) {
    const binding = path.scope.getBinding(path.node.name);
    scopeName += "_" + binding.referencePaths.length + "_";
    for (let parent = path.parentPath; parent; parent = parent.parentPath) {
      if (parent.isFunction() || parent.isClass()) {
        const name = generateExpressionName(
          parent,
          stable
        );
        scopeName += name ? titleCase(name) : "";
      }
    }
  }
  return generateUid(path.scope, scopeName);
}
function generateExpressionName(expression3, stable) {
  if (expression3.isIdentifier()) {
    return expression3.node.name;
  } else if (expression3.isFunctionExpression()) {
    return (expression3.node.id?.name ?? "f") + (stable ? `_${expression3.node.params.length}_${expression3.node.body.body.length}` : "");
  } else if (expression3.isArrowFunctionExpression()) {
    return "f" + (stable ? `_${expression3.node.params.length}_${t17.isExpression(expression3.node.body) ? 1 : expression3.node.body.body.length}` : "");
  } else if (expression3.isClassExpression()) {
    return expression3.node.id?.name ?? "C";
  } else if (expression3.isCallExpression()) {
    return generateExpressionName(
      expression3.get("callee"),
      stable
    );
  } else if (expression3.isThisExpression()) {
    return "this";
  } else if (expression3.isNumericLiteral()) {
    return "LN" + expression3.node.value.toString();
  } else if (expression3.isStringLiteral()) {
    return "LS" + titleCase(expression3.node.value).slice(0, 20);
  } else if (expression3.isObjectExpression()) {
    return "O" + (stable ? `_${expression3.node.properties.length}` : "");
  } else if (expression3.isArrayExpression()) {
    return "A" + (stable ? `_${expression3.node.elements.length}` : "");
  } else if (expression3.isBooleanLiteral()) {
    return "L" + expression3.node.value.toString();
  } else {
    return void 0;
  }
}
function titleCase(str) {
  return str.replace(/(?:^|\s)([a-z])/g, (_, m55) => m55.toUpperCase()).replace(/[^a-zA-Z0-9$_]/g, "");
}

// src/transpile/transforms/index.ts
var transforms_exports = {};
__export(transforms_exports, {
  defaultParameters: () => default_parameters_default,
  logicalAssignments: () => logical_assignments_default,
  nullishCoalescing: () => nullish_coalescing_default,
  nullishCoalescingAssignment: () => nullish_coalescing_assignment_default,
  optionalChaining: () => optional_chaining_default,
  templateLiterals: () => template_literals_default
});

// src/transpile/transforms/default-parameters.ts
import * as t18 from "@babel/types";
import * as m22 from "@codemod/matchers";
var default_parameters_default = {
  name: "default-parameters",
  tags: ["safe"],
  scope: true,
  visitor() {
    const defaultExpression = m22.capture(m22.anyExpression());
    const index = m22.capture(m22.numericLiteral());
    const varName = m22.capture(m22.identifier());
    const varId = m22.capture(
      m22.or(m22.identifier(), m22.arrayPattern(), m22.objectPattern())
    );
    const argumentCheckAnd = m22.logicalExpression(
      "&&",
      m22.binaryExpression(
        ">",
        constMemberExpression("arguments", "length"),
        index
      ),
      m22.binaryExpression(
        "!==",
        m22.memberExpression(
          m22.identifier("arguments"),
          m22.fromCapture(index),
          true
        ),
        m22.identifier("undefined")
      )
    );
    const argumentCheckOr = m22.logicalExpression(
      "||",
      m22.binaryExpression(
        "<=",
        constMemberExpression("arguments", "length"),
        index
      ),
      m22.binaryExpression(
        "===",
        m22.memberExpression(
          m22.identifier("arguments"),
          m22.fromCapture(index),
          true
        ),
        m22.identifier("undefined")
      )
    );
    const defaultParam = m22.variableDeclaration(void 0, [
      m22.variableDeclarator(
        varId,
        m22.conditionalExpression(
          argumentCheckAnd,
          m22.memberExpression(
            m22.identifier("arguments"),
            m22.fromCapture(index),
            true
          ),
          defaultExpression
        )
      )
    ]);
    const defaultFalseParam = m22.variableDeclaration(void 0, [
      m22.variableDeclarator(
        varId,
        m22.logicalExpression(
          "&&",
          argumentCheckAnd,
          m22.memberExpression(
            m22.identifier("arguments"),
            m22.fromCapture(index),
            true
          )
        )
      )
    ]);
    const defaultTrueParam = m22.variableDeclaration(void 0, [
      m22.variableDeclarator(
        varId,
        m22.logicalExpression(
          "||",
          argumentCheckOr,
          m22.memberExpression(
            m22.identifier("arguments"),
            m22.fromCapture(index),
            true
          )
        )
      )
    ]);
    const defaultParamLoose = m22.ifStatement(
      m22.binaryExpression("===", varName, m22.identifier("undefined")),
      m22.blockStatement([
        m22.expressionStatement(
          m22.assignmentExpression(
            "=",
            m22.fromCapture(varName),
            defaultExpression
          )
        )
      ])
    );
    const normalParam = m22.variableDeclaration(void 0, [
      m22.variableDeclarator(
        varId,
        m22.conditionalExpression(
          m22.binaryExpression(
            ">",
            constMemberExpression("arguments", "length"),
            index
          ),
          m22.memberExpression(
            m22.identifier("arguments"),
            m22.fromCapture(index),
            true
          ),
          m22.identifier("undefined")
        )
      )
    ]);
    return {
      VariableDeclaration: {
        exit(path) {
          const fn = path.parentPath.parent;
          if (!t18.isFunction(fn) || path.key !== 0) return;
          const newParam = defaultParam.match(path.node) ? t18.assignmentPattern(varId.current, defaultExpression.current) : defaultFalseParam.match(path.node) ? t18.assignmentPattern(varId.current, t18.booleanLiteral(false)) : defaultTrueParam.match(path.node) ? t18.assignmentPattern(varId.current, t18.booleanLiteral(true)) : normalParam.match(path.node) ? varId.current : null;
          if (!newParam) return;
          for (let i = fn.params.length; i < index.current.value; i++) {
            fn.params[i] = t18.identifier(path.scope.generateUid("param"));
          }
          fn.params[index.current.value] = newParam;
          path.remove();
          this.changes++;
        }
      },
      IfStatement: {
        exit(path) {
          const fn = path.parentPath.parent;
          if (!t18.isFunction(fn) || path.key !== 0) return;
          if (!defaultParamLoose.match(path.node)) return;
          const binding = path.scope.getOwnBinding(varName.current.name);
          if (!binding) return;
          const isFunctionParam = binding.path.listKey === "params" && binding.path.parent === fn;
          if (!isFunctionParam) return;
          binding.path.replaceWith(
            t18.assignmentPattern(varName.current, defaultExpression.current)
          );
          path.remove();
          this.changes++;
        }
      }
    };
  }
};

// src/transpile/transforms/logical-assignments.ts
import * as t19 from "@babel/types";
import * as m23 from "@codemod/matchers";
var logical_assignments_default = {
  name: "logical-assignments",
  tags: ["safe"],
  scope: true,
  visitor() {
    const operator = m23.capture(m23.or("||", "&&"));
    const left = m23.capture(m23.or(m23.identifier(), m23.memberExpression()));
    const right = m23.capture(m23.anyExpression());
    const idMatcher = m23.logicalExpression(
      operator,
      left,
      m23.assignmentExpression("=", m23.fromCapture(left), right)
    );
    const object = m23.capture(m23.anyExpression());
    const property = m23.capture(m23.anyExpression());
    const tmpVar = m23.capture(m23.identifier());
    const member = m23.capture(
      m23.memberExpression(m23.fromCapture(tmpVar), m23.fromCapture(property))
    );
    const memberMatcher = m23.logicalExpression(
      operator,
      m23.memberExpression(m23.assignmentExpression("=", tmpVar, object), property),
      m23.assignmentExpression("=", member, right)
    );
    const computedMemberMatcher = m23.logicalExpression(
      operator,
      m23.memberExpression(
        object,
        m23.assignmentExpression("=", tmpVar, property),
        true
      ),
      m23.assignmentExpression(
        "=",
        m23.memberExpression(m23.fromCapture(object), m23.fromCapture(tmpVar), true),
        right
      )
    );
    const tmpVar2 = m23.capture(m23.identifier());
    const multiComputedMemberMatcher = m23.logicalExpression(
      operator,
      m23.memberExpression(
        m23.assignmentExpression("=", tmpVar, object),
        m23.assignmentExpression("=", tmpVar2, property),
        true
      ),
      m23.assignmentExpression(
        "=",
        m23.memberExpression(m23.fromCapture(tmpVar), m23.fromCapture(tmpVar2), true),
        right
      )
    );
    return {
      LogicalExpression: {
        exit(path) {
          if (idMatcher.match(path.node)) {
            path.replaceWith(
              t19.assignmentExpression(
                operator.current + "=",
                left.current,
                right.current
              )
            );
            this.changes++;
          } else if (memberMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            if (!isTemporaryVariable(binding, 1)) return;
            binding.path.remove();
            member.current.object = object.current;
            path.replaceWith(
              t19.assignmentExpression(
                operator.current + "=",
                member.current,
                right.current
              )
            );
            this.changes++;
          } else if (computedMemberMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            if (!isTemporaryVariable(binding, 1)) return;
            binding.path.remove();
            path.replaceWith(
              t19.assignmentExpression(
                operator.current + "=",
                t19.memberExpression(object.current, property.current, true),
                right.current
              )
            );
            this.changes++;
          } else if (multiComputedMemberMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            const binding2 = path.scope.getBinding(tmpVar2.current.name);
            if (!isTemporaryVariable(binding, 1) || !isTemporaryVariable(binding2, 1))
              return;
            binding.path.remove();
            binding2.path.remove();
            path.replaceWith(
              t19.assignmentExpression(
                operator.current + "=",
                t19.memberExpression(object.current, property.current, true),
                right.current
              )
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/transpile/transforms/nullish-coalescing.ts
import * as t20 from "@babel/types";
import * as m24 from "@codemod/matchers";
var nullish_coalescing_default = {
  name: "nullish-coalescing",
  tags: ["safe"],
  scope: true,
  visitor() {
    const tmpVar = m24.capture(m24.identifier());
    const left = m24.capture(m24.anyExpression());
    const right = m24.capture(m24.anyExpression());
    const idMatcher = m24.conditionalExpression(
      m24.logicalExpression(
        "&&",
        m24.binaryExpression(
          "!==",
          m24.assignmentExpression("=", tmpVar, left),
          m24.nullLiteral()
        ),
        m24.binaryExpression(
          "!==",
          m24.fromCapture(tmpVar),
          m24.identifier("undefined")
        )
      ),
      m24.fromCapture(tmpVar),
      right
    );
    const idLooseMatcher = m24.conditionalExpression(
      m24.binaryExpression(
        "!=",
        m24.assignmentExpression("=", tmpVar, left),
        m24.nullLiteral()
      ),
      m24.fromCapture(tmpVar),
      right
    );
    const simpleIdMatcher = m24.conditionalExpression(
      m24.or(
        m24.logicalExpression(
          "&&",
          m24.binaryExpression("!==", left, m24.nullLiteral()),
          m24.binaryExpression(
            "!==",
            m24.fromCapture(left),
            m24.identifier("undefined")
          )
        ),
        m24.binaryExpression("!=", left, m24.nullLiteral())
      ),
      m24.fromCapture(left),
      right
    );
    const iifeMatcher = m24.callExpression(
      m24.arrowFunctionExpression(
        [m24.fromCapture(tmpVar)],
        m24.anyExpression(),
        false
      ),
      []
    );
    return {
      ConditionalExpression: {
        exit(path) {
          if (idMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            if (iifeMatcher.match(path.parentPath.parent) && isTemporaryVariable(binding, 2, "param")) {
              path.parentPath.parentPath.replaceWith(
                t20.logicalExpression("??", left.current, right.current)
              );
              this.changes++;
            } else if (isTemporaryVariable(binding, 2, "var")) {
              binding.path.remove();
              path.replaceWith(
                t20.logicalExpression("??", left.current, right.current)
              );
              this.changes++;
            }
          } else if (idLooseMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            if (!isTemporaryVariable(binding, 1)) return;
            binding.path.remove();
            path.replaceWith(
              t20.logicalExpression("??", left.current, right.current)
            );
            this.changes++;
          } else if (simpleIdMatcher.match(path.node)) {
            path.replaceWith(
              t20.logicalExpression("??", left.current, right.current)
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/transpile/transforms/nullish-coalescing-assignment.ts
import * as t21 from "@babel/types";
import * as m25 from "@codemod/matchers";
var nullish_coalescing_assignment_default = {
  name: "nullish-coalescing-assignment",
  tags: ["safe"],
  scope: true,
  visitor() {
    const tmpVar = m25.capture(m25.identifier());
    const leftId = m25.capture(m25.identifier());
    const property = m25.capture(m25.identifier());
    const right = m25.capture(m25.anyExpression());
    const computed = m25.capture(m25.anything());
    const memberMatcher = m25.logicalExpression(
      "??",
      m25.memberExpression(
        m25.assignmentExpression("=", tmpVar, leftId),
        property,
        computed
      ),
      m25.assignmentExpression(
        "=",
        m25.memberExpression(
          m25.fromCapture(tmpVar),
          m25.fromCapture(property),
          computed
        ),
        right
      )
    );
    const left = m25.capture(m25.or(m25.identifier(), m25.memberExpression()));
    const simpleMatcher = m25.logicalExpression(
      "??",
      left,
      m25.assignmentExpression("=", m25.fromCapture(left), right)
    );
    return {
      LogicalExpression: {
        exit(path) {
          if (memberMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            if (!isTemporaryVariable(binding, 1)) return;
            binding.path.remove();
            path.replaceWith(
              t21.assignmentExpression(
                "??=",
                t21.memberExpression(
                  leftId.current,
                  property.current,
                  computed.current
                ),
                right.current
              )
            );
            this.changes++;
          } else if (simpleMatcher.match(path.node)) {
            path.replaceWith(
              t21.assignmentExpression("??=", left.current, right.current)
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/transpile/transforms/optional-chaining.ts
import * as t22 from "@babel/types";
import * as m26 from "@codemod/matchers";
var optional_chaining_default = {
  name: "optional-chaining",
  tags: ["safe"],
  scope: true,
  visitor() {
    const object = m26.capture(m26.anyExpression());
    const member = m26.capture(m26.memberExpression(m26.fromCapture(object)));
    const simpleMatcher = m26.conditionalExpression(
      m26.logicalExpression(
        "||",
        m26.binaryExpression("===", object, m26.nullLiteral()),
        m26.binaryExpression(
          "===",
          m26.fromCapture(object),
          m26.identifier("undefined")
        )
      ),
      m26.identifier("undefined"),
      member
    );
    const tmpVar = m26.capture(m26.identifier());
    const tmpMember = m26.capture(m26.memberExpression(m26.fromCapture(tmpVar)));
    const tmpMatcher = m26.conditionalExpression(
      m26.logicalExpression(
        "||",
        m26.binaryExpression(
          "===",
          m26.assignmentExpression("=", tmpVar, object),
          m26.nullLiteral()
        ),
        m26.binaryExpression(
          "===",
          m26.fromCapture(tmpVar),
          m26.identifier("undefined")
        )
      ),
      m26.identifier("undefined"),
      tmpMember
    );
    return {
      ConditionalExpression: {
        exit(path) {
          if (simpleMatcher.match(path.node)) {
            member.current.optional = true;
            path.replaceWith(
              t22.optionalMemberExpression(
                object.current,
                member.current.property,
                member.current.computed,
                true
              )
            );
            this.changes++;
          } else if (tmpMatcher.match(path.node)) {
            const binding = path.scope.getBinding(tmpVar.current.name);
            if (!isTemporaryVariable(binding, 2)) return;
            binding.path.remove();
            tmpMember.current.optional = true;
            path.replaceWith(
              t22.optionalMemberExpression(
                object.current,
                tmpMember.current.property,
                tmpMember.current.computed,
                true
              )
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/transpile/transforms/template-literals.ts
import * as t23 from "@babel/types";
import * as m27 from "@codemod/matchers";
function escape(str) {
  return str.replaceAll("\\", "\\\\").replaceAll("`", "\\`").replaceAll("$", "\\$").replaceAll("\0", "\\0").replaceAll("\b", "\\b").replaceAll("\f", "\\f").replaceAll("\r", "\\r").replaceAll("	", "\\t").replaceAll("\v", "\\v");
}
function push(template2, value) {
  if (value.type === "StringLiteral") {
    const lastQuasi = template2.quasis.at(-1);
    lastQuasi.value.raw += escape(value.value);
  } else if (value.type === "TemplateLiteral") {
    const lastQuasi = template2.quasis.at(-1);
    const firstQuasi = value.quasis[0];
    lastQuasi.value.raw += firstQuasi.value.raw;
    template2.expressions.push(...value.expressions);
    template2.quasis.push(...value.quasis.slice(1));
  } else {
    template2.expressions.push(value);
    template2.quasis.push(t23.templateElement({ raw: "" }));
  }
}
function unshift(template2, value) {
  if (value.type === "StringLiteral") {
    const firstQuasi = template2.quasis[0];
    firstQuasi.value.raw = escape(value.value) + firstQuasi.value.raw;
  } else {
    template2.expressions.unshift(value);
    template2.quasis.unshift(t23.templateElement({ raw: "" }));
  }
}
var template_literals_default = {
  name: "template-literals",
  tags: ["unsafe"],
  visitor() {
    const string = m27.capture(m27.or(m27.stringLiteral(), m27.templateLiteral()));
    const concatMatcher = m27.callExpression(
      constMemberExpression(string, "concat"),
      m27.arrayOf(m27.anyExpression())
    );
    return {
      BinaryExpression: {
        exit(path) {
          if (path.node.operator !== "+") return;
          if (t23.isTemplateLiteral(path.node.left)) {
            push(path.node.left, path.node.right);
            path.replaceWith(path.node.left);
            this.changes++;
          } else if (t23.isTemplateLiteral(path.node.right) && t23.isExpression(path.node.left)) {
            unshift(path.node.right, path.node.left);
            path.replaceWith(path.node.right);
            this.changes++;
          }
        }
      },
      CallExpression: {
        exit(path) {
          if (concatMatcher.match(path.node)) {
            const template2 = t23.templateLiteral(
              [t23.templateElement({ raw: "" })],
              []
            );
            push(template2, string.current);
            for (const arg of path.node.arguments) {
              push(template2, arg);
            }
            path.replaceWith(template2);
            this.changes++;
          }
        }
      }
    };
  }
};

// src/transpile/index.ts
var transpile_default = mergeTransforms({
  name: "transpile",
  tags: ["safe"],
  transforms: Object.values(transforms_exports)
});

// src/unminify/transforms/index.ts
var transforms_exports2 = {};
__export(transforms_exports2, {
  blockStatements: () => block_statements_default,
  computedProperties: () => computed_properties_default,
  forToWhile: () => for_to_while_default,
  infinity: () => infinity_default,
  invertBooleanLogic: () => invert_boolean_logic_default,
  jsonParse: () => json_parse_default,
  letToConst: () => let_to_const_default,
  logicalToIf: () => logical_to_if_default,
  mergeElseIf: () => merge_else_if_default,
  mergeStrings: () => merge_strings_default,
  numberExpressions: () => number_expressions_default,
  rawLiterals: () => raw_literals_default,
  removeDoubleNot: () => remove_double_not_default,
  sequence: () => sequence_default,
  splitForLoopVars: () => split_for_loop_vars_default,
  splitVariableDeclarations: () => split_variable_declarations_default,
  ternaryToIf: () => ternary_to_if_default,
  truncateNumberLiteral: () => truncate_number_literal_default,
  typeofUndefined: () => typeof_undefined_default,
  unaryExpressions: () => unary_expressions_default,
  unminifyBooleans: () => unminify_booleans_default,
  voidToUndefined: () => void_to_undefined_default,
  yoda: () => yoda_default
});

// src/unminify/transforms/block-statements.ts
import * as t24 from "@babel/types";
var block_statements_default = {
  name: "block-statements",
  tags: ["safe"],
  visitor: () => ({
    IfStatement: {
      exit(path) {
        if (!t24.isBlockStatement(path.node.consequent) && !t24.isEmptyStatement(path.node.consequent)) {
          path.node.consequent = t24.blockStatement([path.node.consequent]);
          this.changes++;
        }
        if (path.node.alternate && !t24.isBlockStatement(path.node.alternate)) {
          path.node.alternate = t24.blockStatement([path.node.alternate]);
          this.changes++;
        }
      }
    },
    Loop: {
      exit(path) {
        if (!t24.isBlockStatement(path.node.body) && !t24.isEmptyStatement(path.node.body)) {
          path.node.body = t24.blockStatement([path.node.body]);
          this.changes++;
        }
      }
    },
    ArrowFunctionExpression: {
      exit(path) {
        if (t24.isSequenceExpression(path.node.body)) {
          path.node.body = t24.blockStatement([
            t24.returnStatement(path.node.body)
          ]);
          this.changes++;
        }
      }
    }
  })
};

// src/unminify/transforms/computed-properties.ts
import { isIdentifierName } from "@babel/helper-validator-identifier";
import * as t25 from "@babel/types";
import * as m28 from "@codemod/matchers";
var computed_properties_default = {
  name: "computed-properties",
  tags: ["safe"],
  visitor() {
    const stringMatcher = m28.capture(
      m28.stringLiteral(m28.matcher(isIdentifierName))
    );
    const propertyMatcher = m28.or(
      m28.memberExpression(m28.anything(), stringMatcher, true),
      m28.optionalMemberExpression(m28.anything(), stringMatcher, true)
    );
    const keyMatcher = m28.or(
      m28.objectProperty(stringMatcher),
      m28.classProperty(stringMatcher),
      m28.objectMethod(void 0, stringMatcher),
      m28.classMethod(void 0, stringMatcher)
    );
    return {
      "MemberExpression|OptionalMemberExpression": {
        exit(path) {
          if (!propertyMatcher.match(path.node)) return;
          path.node.computed = false;
          path.node.property = t25.identifier(stringMatcher.current.value);
          this.changes++;
        }
      },
      "ObjectProperty|ClassProperty|ObjectMethod|ClassMethod": {
        exit(path) {
          if (!keyMatcher.match(path.node)) return;
          if (path.type === "ClassMethod" && stringMatcher.current.value === "constructor" || path.type === "ObjectProperty" && stringMatcher.current.value === "__proto__")
            return;
          path.node.computed = false;
          path.node.key = t25.identifier(stringMatcher.current.value);
          this.changes++;
        }
      }
    };
  }
};

// src/unminify/transforms/for-to-while.ts
import * as t26 from "@babel/types";
var for_to_while_default = {
  name: "for-to-while",
  tags: ["safe"],
  visitor() {
    return {
      ForStatement: {
        exit(path) {
          const { test, body, init, update } = path.node;
          if (init || update) return;
          path.replaceWith(
            t26.whileStatement(test ?? t26.booleanLiteral(true), body)
          );
          this.changes++;
        }
      }
    };
  }
};

// src/unminify/transforms/infinity.ts
import * as t27 from "@babel/types";
import * as m29 from "@codemod/matchers";
var infinity_default = {
  name: "infinity",
  tags: ["safe"],
  scope: true,
  visitor: () => {
    const infinityMatcher = m29.binaryExpression(
      "/",
      m29.numericLiteral(1),
      m29.numericLiteral(0)
    );
    const negativeInfinityMatcher = m29.binaryExpression(
      "/",
      m29.unaryExpression("-", m29.numericLiteral(1)),
      m29.numericLiteral(0)
    );
    return {
      BinaryExpression: {
        exit(path) {
          if (path.scope.hasBinding("Infinity", { noGlobals: true })) return;
          if (infinityMatcher.match(path.node)) {
            path.replaceWith(t27.identifier("Infinity"));
            this.changes++;
          } else if (negativeInfinityMatcher.match(path.node)) {
            path.replaceWith(t27.unaryExpression("-", t27.identifier("Infinity")));
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/invert-boolean-logic.ts
import * as t28 from "@babel/types";
import * as m30 from "@codemod/matchers";
var INVERTED_BINARY_OPERATORS = {
  "==": "!=",
  "===": "!==",
  "!=": "==",
  "!==": "==="
};
var INVERTED_LOGICAL_OPERATORS = {
  "||": "&&",
  "&&": "||"
};
var invert_boolean_logic_default = {
  name: "invert-boolean-logic",
  tags: ["safe"],
  visitor: () => {
    const logicalExpression10 = m30.logicalExpression(
      m30.or(...Object.values(INVERTED_LOGICAL_OPERATORS))
    );
    const logicalMatcher = m30.unaryExpression("!", logicalExpression10);
    const binaryExpression16 = m30.capture(
      m30.binaryExpression(m30.or(...Object.values(INVERTED_BINARY_OPERATORS)))
    );
    const binaryMatcher = m30.unaryExpression("!", binaryExpression16);
    return {
      UnaryExpression: {
        exit(path) {
          const { argument } = path.node;
          if (binaryMatcher.match(path.node)) {
            binaryExpression16.current.operator = INVERTED_BINARY_OPERATORS[binaryExpression16.current.operator];
            path.replaceWith(binaryExpression16.current);
            this.changes++;
          } else if (logicalMatcher.match(path.node)) {
            let current = argument;
            while (logicalExpression10.match(current)) {
              current.operator = INVERTED_LOGICAL_OPERATORS[current.operator];
              current.right = t28.unaryExpression("!", current.right);
              if (!logicalExpression10.match(current.left)) {
                current.left = t28.unaryExpression("!", current.left);
              }
              current = current.left;
            }
            path.replaceWith(argument);
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/json-parse.ts
import { parseExpression } from "@babel/parser";
import * as m31 from "@codemod/matchers";
var json_parse_default = {
  name: "json-parse",
  tags: ["safe"],
  scope: true,
  visitor: () => {
    const string = m31.capture(m31.anyString());
    const matcher17 = m31.callExpression(constMemberExpression("JSON", "parse"), [
      m31.stringLiteral(string)
    ]);
    return {
      CallExpression: {
        exit(path) {
          if (matcher17.match(path.node) && !path.scope.hasBinding("JSON", { noGlobals: true })) {
            try {
              JSON.parse(string.current);
              const parsed = parseExpression(string.current);
              path.replaceWith(parsed);
              this.changes++;
            } catch {
            }
          }
        }
      }
    };
  }
};

// src/unminify/transforms/let-to-const.ts
import * as t29 from "@babel/types";
import * as m32 from "@codemod/matchers";
var let_to_const_default = {
  name: "let-to-const",
  tags: ["safe"],
  visitor: () => ({
    VariableDeclaration: {
      exit(path) {
        if (!letMatcher.match(path.node)) return;
        if (path.parentPath.isProgram()) return;
        if (path.key === "init" && path.parentPath.isForStatement()) return;
        const declarations = [];
        let changes = 0;
        for (const declaration of path.node.declarations) {
          if (path.scope && isConstant(declaration.id, path.scope)) {
            declarations.push(t29.variableDeclaration("const", [declaration]));
            changes++;
          } else {
            declarations.push(t29.variableDeclaration("let", [declaration]));
          }
        }
        if (!changes) return;
        path.replaceWithMultiple(declarations);
        this.changes += changes;
      }
    }
  }),
  scope: true
};
function isConstant(id, scope) {
  if (t29.isIdentifier(id)) {
    const binding = scope.getBinding(id.name);
    return binding ? isConstantBinding(binding) : false;
  }
  if (t29.isArrayPattern(id)) {
    return id.elements.every(
      (element) => element && isConstant(element, scope)
    );
  }
  if (t29.isObjectPattern(id)) {
    return id.properties.every(
      (property) => isConstant(
        t29.isRestElement(property) ? property.argument : property.value,
        scope
      )
    );
  }
  return false;
}
var letMatcher = m32.variableDeclaration("let", m32.anything());

// src/unminify/transforms/logical-to-if.ts
import { statement } from "@babel/template";
import * as t30 from "@babel/types";
var logical_to_if_default = {
  name: "logical-to-if",
  tags: ["safe"],
  visitor: () => {
    const buildIf = statement`if (TEST) { BODY; }`;
    const buildIfNot = statement`if (!TEST) { BODY; }`;
    return {
      ExpressionStatement: {
        exit(path) {
          const expression3 = path.node.expression;
          if (!t30.isLogicalExpression(expression3)) return;
          if (expression3.operator === "&&") {
            path.replaceWith(
              buildIf({
                TEST: expression3.left,
                BODY: expression3.right
              })
            );
            this.changes++;
          } else if (expression3.operator === "||") {
            path.replaceWith(
              buildIfNot({
                TEST: expression3.left,
                BODY: expression3.right
              })
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/merge-else-if.ts
import * as m34 from "@codemod/matchers";
import * as t32 from "@babel/types";

// src/unminify/transforms/remove-double-not.ts
import * as t31 from "@babel/types";
import * as m33 from "@codemod/matchers";
var remove_double_not_default = {
  name: "remove-double-not",
  tags: ["safe"],
  visitor() {
    const expression3 = m33.capture(m33.anyExpression());
    const doubleNot = m33.unaryExpression(
      "!",
      m33.unaryExpression("!", expression3)
    );
    const tripleNot = m33.unaryExpression("!", doubleNot);
    const arrayCall = m33.callExpression(
      constMemberExpression(
        m33.arrayExpression(),
        m33.or(
          "filter",
          "find",
          "findLast",
          "findIndex",
          "findLastIndex",
          "some",
          "every"
        )
      ),
      [m33.arrowFunctionExpression(m33.anything(), doubleNot)]
    );
    return {
      Conditional: {
        exit(path) {
          if (doubleNot.match(path.node.test)) {
            path.get("test").replaceWith(expression3.current);
            this.changes++;
          }
        }
      },
      UnaryExpression: {
        exit(path) {
          if (tripleNot.match(path.node)) {
            path.replaceWith(t31.unaryExpression("!", expression3.current));
            this.changes++;
          }
        }
      },
      CallExpression: {
        exit(path) {
          if (arrayCall.match(path.node)) {
            path.get("arguments.0.body").replaceWith(
              expression3.current
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/merge-else-if.ts
var merge_else_if_default = {
  name: "merge-else-if",
  tags: ["safe"],
  visitor() {
    const nestedIf = m34.capture(m34.ifStatement());
    const matcherElse = m34.ifStatement(
      m34.anything(),
      m34.anything(),
      m34.blockStatement([nestedIf])
    );
    const matcherIf = m34.ifStatement(
      m34.anything(),
      m34.blockStatement([nestedIf]),
      m34.anything()
    );
    const matchIfNegation = m34.ifStatement(
      m34.unaryExpression("!", m34.anything()),
      m34.anything(),
      m34.anything()
    );
    return {
      IfStatement: {
        exit(path) {
          if (matcherElse.match(path.node)) {
            path.node.alternate = nestedIf.current;
            this.changes++;
          }
          if (matcherIf.match(path.node) && path.node.alternate && !nestedIf.match(path.node.alternate)) {
            path.node.test = t32.unaryExpression("!", path.node.test);
            path.node.consequent = path.node.alternate;
            path.node.alternate = nestedIf.current;
            this.changes += applyTransforms(
              path.node,
              [invert_boolean_logic_default, remove_double_not_default],
              {
                log: false
              }
            ).changes;
            this.changes++;
          }
          if (matchIfNegation.match(path.node) && path.node.alternate && !nestedIf.match(path.node.alternate)) {
            path.node.test = path.node.test.argument;
            const temp = path.node.consequent;
            path.node.consequent = path.node.alternate;
            path.node.alternate = temp;
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/number-expressions.ts
import * as t33 from "@babel/types";
import * as m35 from "@codemod/matchers";
var number_expressions_default = {
  name: "number-expressions",
  tags: ["safe"],
  visitor: () => ({
    "BinaryExpression|UnaryExpression": {
      exit(path) {
        if (!matcher13.match(path.node)) return;
        const evaluated = path.evaluate();
        if (t33.isBinaryExpression(path.node, { operator: "/" }) && !Number.isInteger(evaluated.value)) {
          return;
        }
        path.replaceWith(t33.valueToNode(evaluated.value));
        path.skip();
        this.changes++;
      }
    }
  })
};
var matcher13 = m35.or(
  m35.unaryExpression("-", m35.or(m35.stringLiteral(), m35.numericLiteral())),
  m35.binaryExpression(
    m35.or("+", "-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"),
    m35.or(
      m35.stringLiteral(),
      m35.numericLiteral(),
      m35.unaryExpression("-", m35.numericLiteral())
    ),
    m35.or(
      m35.stringLiteral(),
      m35.numericLiteral(),
      m35.unaryExpression("-", m35.numericLiteral())
    )
  )
);

// src/unminify/transforms/raw-literals.ts
var raw_literals_default = {
  name: "raw-literals",
  tags: ["safe"],
  visitor: () => ({
    StringLiteral(path) {
      if (path.node.extra) {
        path.node.extra = void 0;
        this.changes++;
      }
    },
    NumericLiteral(path) {
      if (path.node.extra) {
        path.node.extra = void 0;
        this.changes++;
      }
    }
  })
};

// src/unminify/transforms/sequence.ts
import * as t34 from "@babel/types";
import * as m36 from "@codemod/matchers";
var sequence_default = {
  name: "sequence",
  tags: ["safe"],
  visitor() {
    const assignmentVariable = m36.or(
      m36.identifier(),
      m36.memberExpression(m36.identifier(), m36.or(m36.identifier(), safeLiteral))
    );
    const assignedSequence = m36.capture(m36.sequenceExpression());
    const assignmentMatcher = m36.assignmentExpression(
      // "||=", "&&=", and "??=" have short-circuiting behavior
      m36.or(
        "=",
        "+=",
        "-=",
        "*=",
        "/=",
        "%=",
        "**=",
        "<<=",
        ">>=",
        ">>>=",
        "|=",
        "^=",
        "&="
      ),
      assignmentVariable,
      assignedSequence
    );
    return {
      AssignmentExpression: {
        exit(path) {
          if (!assignmentMatcher.match(path.node)) return;
          const { expressions } = assignedSequence.current;
          path.node.right = expressions.pop();
          const newNodes = path.parentPath.isExpressionStatement() ? expressions.map(t34.expressionStatement) : expressions;
          path.insertBefore(newNodes);
          this.changes++;
        }
      },
      ExpressionStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.expression)) return;
          const statements = path.node.expression.expressions.map(
            t34.expressionStatement
          );
          path.replaceWithMultiple(statements);
          this.changes++;
        }
      },
      ReturnStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.argument)) return;
          const { expressions } = path.node.argument;
          path.node.argument = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.insertBefore(statements);
          this.changes++;
        }
      },
      IfStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.test)) return;
          const { expressions } = path.node.test;
          path.node.test = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.insertBefore(statements);
          this.changes++;
        }
      },
      SwitchStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.discriminant)) return;
          const { expressions } = path.node.discriminant;
          path.node.discriminant = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.insertBefore(statements);
          this.changes++;
        }
      },
      ThrowStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.argument)) return;
          const { expressions } = path.node.argument;
          path.node.argument = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.insertBefore(statements);
          this.changes++;
        }
      },
      ForInStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.right)) return;
          const { expressions } = path.node.right;
          path.node.right = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.insertBefore(statements);
          this.changes++;
        }
      },
      ForOfStatement: {
        exit(path) {
          if (!t34.isSequenceExpression(path.node.right)) return;
          const { expressions } = path.node.right;
          path.node.right = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.insertBefore(statements);
          this.changes++;
        }
      },
      ForStatement: {
        exit(path) {
          if (t34.isSequenceExpression(path.node.init)) {
            const statements = path.node.init.expressions.map(
              t34.expressionStatement
            );
            path.node.init = null;
            path.insertBefore(statements);
            this.changes++;
          }
          if (t34.isSequenceExpression(path.node.update) && path.node.body.type === "EmptyStatement") {
            const { expressions } = path.node.update;
            path.node.update = expressions.pop();
            const statements = expressions.map(t34.expressionStatement);
            path.node.body = t34.blockStatement(statements);
            this.changes++;
          }
        }
      },
      VariableDeclaration: {
        exit(path) {
          const sequence = m36.capture(m36.sequenceExpression());
          const matcher17 = m36.variableDeclaration(void 0, [
            m36.variableDeclarator(void 0, sequence)
          ]);
          if (!matcher17.match(path.node)) return;
          const { expressions } = sequence.current;
          path.node.declarations[0].init = expressions.pop();
          const statements = expressions.map(t34.expressionStatement);
          path.getStatementParent()?.insertBefore(statements);
          this.changes++;
        }
      },
      SequenceExpression: {
        exit(path) {
          const { expressions } = path.node;
          if (expressions.every((node) => safeLiteral.match(node))) {
            path.replaceWith(expressions.at(-1));
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/split-for-loop-vars.ts
import * as t35 from "@babel/types";
import * as m37 from "@codemod/matchers";
var matcher14 = m37.forStatement(
  m37.variableDeclaration("var", m37.arrayOf(m37.variableDeclarator(m37.identifier())))
);
var split_for_loop_vars_default = {
  name: "split-for-loop-vars",
  tags: ["safe"],
  scope: true,
  visitor: () => ({
    ForStatement: {
      exit(path) {
        if (!matcher14.match(path.node)) return;
        const { init, test, update } = path.node;
        const { declarations } = init;
        for (let i = 0; i < declarations.length; i++) {
          const declarator = declarations[i];
          const binding = path.scope.getBinding(
            declarator.id.name
          );
          if (!binding) break;
          const isUsedInTestOrUpdate = binding.constantViolations.some(
            (reference) => reference.find((p) => p.node === test || p.node === update)
          ) || binding.referencePaths.some(
            (reference) => reference.find((p) => p.node === test || p.node === update)
          );
          if (isUsedInTestOrUpdate) break;
          path.insertBefore(t35.variableDeclaration("var", [declarator]));
          declarations.shift();
          i--;
          this.changes++;
        }
        if (declarations.length === 0) path.get("init").remove();
      }
    }
  })
};

// src/unminify/transforms/split-variable-declarations.ts
import * as t36 from "@babel/types";
var split_variable_declarations_default = {
  name: "split-variable-declarations",
  tags: ["safe"],
  visitor: () => ({
    VariableDeclaration: {
      exit(path) {
        if (path.node.declarations.length > 1) {
          if (path.key === "init" && path.parentPath.isForStatement()) {
            if (!path.parentPath.node.test && !path.parentPath.node.update && path.node.kind === "var") {
              path.parentPath.insertBefore(
                path.node.declarations.map(
                  (declaration) => t36.variableDeclaration(path.node.kind, [declaration])
                )
              );
              path.remove();
              this.changes++;
            }
          } else {
            if (path.parentPath.isExportNamedDeclaration()) {
              path.parentPath.replaceWithMultiple(
                path.node.declarations.map(
                  (declaration) => t36.exportNamedDeclaration(
                    t36.variableDeclaration(path.node.kind, [declaration])
                  )
                )
              );
            } else {
              path.replaceWithMultiple(
                path.node.declarations.map(
                  (declaration) => t36.variableDeclaration(path.node.kind, [declaration])
                )
              );
            }
            this.changes++;
          }
        }
      }
    }
  })
};

// src/unminify/transforms/ternary-to-if.ts
import { statement as statement2 } from "@babel/template";
import * as m38 from "@codemod/matchers";
var ternary_to_if_default = {
  name: "ternary-to-if",
  tags: ["safe"],
  visitor() {
    const test = m38.capture(m38.anyExpression());
    const consequent = m38.capture(m38.anyExpression());
    const alternate = m38.capture(m38.anyExpression());
    const conditional = m38.conditionalExpression(test, consequent, alternate);
    const buildIf = statement2`if (TEST) { CONSEQUENT; } else { ALTERNATE; }`;
    const buildIfReturn = statement2`if (TEST) { return CONSEQUENT; } else { return ALTERNATE; }`;
    return {
      ExpressionStatement: {
        exit(path) {
          if (conditional.match(path.node.expression)) {
            path.replaceWith(
              buildIf({
                TEST: test.current,
                CONSEQUENT: consequent.current,
                ALTERNATE: alternate.current
              })
            );
            this.changes++;
          }
        }
      },
      ReturnStatement: {
        exit(path) {
          if (conditional.match(path.node.argument)) {
            path.replaceWith(
              buildIfReturn({
                TEST: test.current,
                CONSEQUENT: consequent.current,
                ALTERNATE: alternate.current
              })
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/truncate-number-literal.ts
import * as m39 from "@codemod/matchers";
var truncate_number_literal_default = {
  name: "truncate-number-literal",
  tags: ["safe"],
  visitor: () => {
    const binaryOperators = m39.or("|", "&", "^", "<<", ">>", ">>>");
    const literal = m39.capture(m39.numericLiteral());
    const matcher17 = m39.or(
      m39.binaryExpression(binaryOperators, literal, m39.anything()),
      m39.binaryExpression(binaryOperators, m39.anything(), literal)
    );
    return {
      BinaryExpression: {
        exit(path) {
          if (!matcher17.match(path.node)) return;
          const value = literal.current.value;
          const isShifter = literal.current === path.node.right && (path.node.operator === "<<" || path.node.operator === ">>");
          const truncation = isShifter ? 31 : 4294967295;
          const truncated = value & truncation;
          if (truncated === value) return;
          literal.current.value = truncated;
          this.changes++;
        }
      }
    };
  }
};

// src/unminify/transforms/typeof-undefined.ts
import * as t37 from "@babel/types";
import * as m40 from "@codemod/matchers";
var OPERATOR_MAP = {
  ">": "===",
  "<": "!=="
};
var typeof_undefined_default = {
  name: "typeof-undefined",
  tags: ["safe"],
  visitor() {
    const operator = m40.capture(m40.or(">", "<"));
    const argument = m40.capture(m40.anyExpression());
    const matcher17 = m40.binaryExpression(
      operator,
      m40.unaryExpression("typeof", argument),
      m40.stringLiteral("u")
    );
    return {
      BinaryExpression: {
        exit(path) {
          if (!matcher17.match(path.node)) return;
          path.replaceWith(
            t37.binaryExpression(
              OPERATOR_MAP[operator.current],
              t37.unaryExpression("typeof", argument.current),
              t37.stringLiteral("undefined")
            )
          );
          this.changes++;
        }
      }
    };
  }
};

// src/unminify/transforms/unary-expressions.ts
import * as t38 from "@babel/types";
import * as m41 from "@codemod/matchers";
var unary_expressions_default = {
  name: "unary-expressions",
  tags: ["safe"],
  visitor() {
    const argument = m41.capture(m41.anyExpression());
    const matcher17 = m41.expressionStatement(
      m41.unaryExpression(m41.or("void", "!", "typeof"), argument)
    );
    const returnVoid = m41.returnStatement(m41.unaryExpression("void", argument));
    return {
      ExpressionStatement: {
        exit(path) {
          if (!matcher17.match(path.node)) return;
          path.replaceWith(argument.current);
          this.changes++;
        }
      },
      ReturnStatement: {
        exit(path) {
          if (!returnVoid.match(path.node)) return;
          path.replaceWith(argument.current);
          path.insertAfter(t38.returnStatement());
          this.changes++;
        }
      }
    };
  }
};

// src/unminify/transforms/unminify-booleans.ts
import * as t39 from "@babel/types";
import * as m42 from "@codemod/matchers";
var unminify_booleans_default = {
  name: "unminify-booleans",
  tags: ["safe"],
  visitor: () => ({
    UnaryExpression(path) {
      if (trueMatcher2.match(path.node)) {
        path.replaceWith(t39.booleanLiteral(true));
        this.changes++;
      } else if (falseMatcher2.match(path.node)) {
        path.replaceWith(t39.booleanLiteral(false));
        this.changes++;
      }
    }
  })
};
var trueMatcher2 = m42.or(
  m42.unaryExpression("!", m42.numericLiteral(0)),
  m42.unaryExpression("!", m42.unaryExpression("!", m42.numericLiteral(1))),
  m42.unaryExpression("!", m42.unaryExpression("!", m42.arrayExpression([])))
);
var falseMatcher2 = m42.or(
  m42.unaryExpression("!", m42.numericLiteral(1)),
  m42.unaryExpression("!", m42.arrayExpression([]))
);

// src/unminify/transforms/void-to-undefined.ts
import * as t40 from "@babel/types";
import * as m43 from "@codemod/matchers";
var void_to_undefined_default = {
  name: "void-to-undefined",
  tags: ["safe"],
  scope: true,
  visitor: () => {
    const matcher17 = m43.unaryExpression("void", m43.numericLiteral(0));
    return {
      UnaryExpression: {
        exit(path) {
          if (matcher17.match(path.node) && !path.scope.hasBinding("undefined", { noGlobals: true })) {
            path.replaceWith(t40.identifier("undefined"));
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/transforms/yoda.ts
import * as t41 from "@babel/types";
import * as m44 from "@codemod/matchers";
var FLIPPED_OPERATORS = {
  "==": "==",
  "===": "===",
  "!=": "!=",
  "!==": "!==",
  ">": "<",
  "<": ">",
  ">=": "<=",
  "<=": ">=",
  "*": "*",
  "^": "^",
  "&": "&",
  "|": "|"
};
var yoda_default = {
  name: "yoda",
  tags: ["safe"],
  visitor: () => {
    const pureValue = m44.or(
      m44.stringLiteral(),
      m44.numericLiteral(),
      m44.unaryExpression(
        "-",
        m44.or(m44.numericLiteral(), m44.identifier("Infinity"))
      ),
      m44.booleanLiteral(),
      m44.nullLiteral(),
      m44.identifier("undefined"),
      m44.identifier("NaN"),
      m44.identifier("Infinity")
    );
    const matcher17 = m44.binaryExpression(
      m44.or(...Object.values(FLIPPED_OPERATORS)),
      pureValue,
      m44.matcher((node) => !pureValue.match(node))
    );
    return {
      BinaryExpression: {
        exit(path) {
          if (matcher17.match(path.node)) {
            path.replaceWith(
              t41.binaryExpression(
                FLIPPED_OPERATORS[path.node.operator],
                path.node.right,
                path.node.left
              )
            );
            this.changes++;
          }
        }
      }
    };
  }
};

// src/unminify/index.ts
var unminify_default = mergeTransforms({
  name: "unminify",
  tags: ["safe"],
  transforms: Object.values(transforms_exports2)
});

// src/unpack/index.ts
import debug5 from "debug";

// src/unpack/browserify/index.ts
import * as t42 from "@babel/types";
import * as m45 from "@codemod/matchers";

// src/unpack/path.ts
import { posix } from "node:path";
var { dirname, join, relative } = posix;
function relativePath(from, to) {
  if (to.startsWith("node_modules/")) return to.replace("node_modules/", "");
  const relativePath2 = relative(dirname(from), to);
  return relativePath2.startsWith(".") ? relativePath2 : "./" + relativePath2;
}
function resolveDependencyTree(tree, entry) {
  const paths = resolveTreePaths(tree, entry);
  paths[entry] = "./index.js";
  const entryDepth = Object.values(paths).reduce(
    (acc, path) => Math.max(acc, path.split("..").length),
    0
  );
  const prefix = Array(entryDepth - 1).fill(0).map((_, i) => `tmp${i}`).join("/");
  return Object.fromEntries(
    Object.entries(paths).map(([id, path]) => {
      const newPath = path.startsWith("node_modules/") ? path : join(prefix, path);
      return [id, newPath];
    })
  );
}
function resolveTreePaths(graph, entry, cwd = ".", paths = {}) {
  const entries = Object.entries(graph[entry]);
  for (const [id, name] of entries) {
    const isCircular = Object.hasOwn(paths, id);
    if (isCircular) continue;
    let path;
    if (name.startsWith(".")) {
      path = join(cwd, name);
      if (!path.endsWith(".js")) path += ".js";
    } else {
      path = join("node_modules", name, "index.js");
    }
    paths[id] = path;
    const newCwd = path.endsWith(".js") ? dirname(path) : path;
    resolveTreePaths(graph, id, newCwd, paths);
  }
  return paths;
}

// src/unpack/bundle.ts
import { dirname as dirname2, join as join2, normalize, relative as relative2 } from "node:path";
var Bundle = class {
  type;
  entryId;
  modules;
  constructor(type, entryId, modules) {
    this.type = type;
    this.entryId = entryId;
    this.modules = modules;
  }
  applyMappings(mappings) {
    const mappingPaths = Object.keys(mappings);
    if (mappingPaths.length === 0) return;
    const unusedMappings = new Set(mappingPaths);
    for (const module3 of this.modules.values()) {
      traverse_default(module3.ast, {
        enter(path) {
          for (const mappingPath of mappingPaths) {
            if (mappings[mappingPath].match(path.node)) {
              if (unusedMappings.has(mappingPath)) {
                unusedMappings.delete(mappingPath);
              } else {
                throw new Error(`Mapping ${mappingPath} is already used.`);
              }
              const resolvedPath = mappingPath.startsWith("./") ? mappingPath : `node_modules/${mappingPath}`;
              module3.path = resolvedPath;
              path.stop();
              break;
            }
          }
        },
        noScope: true
      });
    }
  }
  /**
   * Saves each module to a file and the bundle metadata to a JSON file.
   * @param path Output directory
   */
  async save(path) {
    const bundleJson = {
      type: this.type,
      entryId: this.entryId,
      modules: Array.from(this.modules.values(), (module3) => ({
        id: module3.id,
        path: module3.path
      }))
    };
    const { mkdir, writeFile } = await import("node:fs/promises");
    await mkdir(path, { recursive: true });
    await writeFile(
      join2(path, "bundle.json"),
      JSON.stringify(bundleJson, null, 2),
      "utf8"
    );
    await Promise.all(
      Array.from(this.modules.values(), async (module3) => {
        const modulePath = normalize(join2(path, module3.path));
        if (relative2(path, modulePath).startsWith("..")) {
          throw new Error(`detected path traversal: ${module3.path}`);
        }
        await mkdir(dirname2(modulePath), { recursive: true });
        await writeFile(modulePath, module3.code, "utf8");
      })
    );
  }
  applyTransforms() {
  }
};

// src/unpack/browserify/bundle.ts
var BrowserifyBundle = class extends Bundle {
  constructor(entryId, modules) {
    super("browserify", entryId, modules);
  }
};

// src/unpack/module.ts
var Module = class {
  id;
  isEntry;
  path;
  /**
   * @internal
   */
  ast;
  #code;
  constructor(id, ast, isEntry) {
    this.id = id;
    this.ast = ast;
    this.isEntry = isEntry;
    this.path = `./${isEntry ? "index" : id.replace(/\.js$/, "")}.js`;
  }
  /**
   * @internal
   */
  regenerateCode() {
    this.#code = generate(this.ast);
    return this.#code;
  }
  get code() {
    return this.#code ?? this.regenerateCode();
  }
  set code(code) {
    this.#code = code;
  }
};

// src/unpack/browserify/module.ts
var BrowserifyModule = class extends Module {
  dependencies;
  constructor(id, ast, isEntry, dependencies) {
    super(id, ast, isEntry);
    this.dependencies = dependencies;
  }
};

// src/unpack/browserify/index.ts
var unpackBrowserify = {
  name: "unpack-browserify",
  tags: ["unsafe"],
  scope: true,
  visitor(options) {
    const modules = /* @__PURE__ */ new Map();
    const files = m45.capture(
      m45.arrayOf(
        m45.objectProperty(
          m45.or(m45.numericLiteral(), m45.stringLiteral(), m45.identifier()),
          m45.arrayExpression([
            // function(require, module, exports) {...}
            m45.functionExpression(),
            // dependencies: { './add': 1, 'lib': 3 }
            m45.objectExpression(
              m45.arrayOf(
                m45.objectProperty(
                  constKey(),
                  m45.or(
                    m45.numericLiteral(),
                    m45.identifier("undefined"),
                    m45.stringLiteral()
                  )
                )
              )
            )
          ])
        )
      )
    );
    const entryIdMatcher = m45.capture(
      m45.or(m45.numericLiteral(), m45.stringLiteral())
    );
    const matcher17 = m45.callExpression(
      m45.or(
        // (function (files, cache, entryIds) {...})(...)
        m45.functionExpression(void 0, [
          m45.identifier(),
          m45.identifier(),
          m45.identifier()
        ]),
        // (function () { function init(files, cache, entryIds) {...} return init; })()(...)
        iife(
          [],
          m45.blockStatement([
            m45.functionDeclaration(void 0, [
              m45.identifier(),
              m45.identifier(),
              m45.identifier()
            ]),
            m45.returnStatement(m45.identifier())
          ])
        )
      ),
      [
        m45.objectExpression(files),
        m45.objectExpression(),
        m45.arrayExpression(m45.anyList(entryIdMatcher, m45.zeroOrMore()))
      ]
    );
    return {
      CallExpression(path) {
        if (!matcher17.match(path.node)) return;
        path.stop();
        const entryId = entryIdMatcher.current.value.toString();
        const modulesPath = path.get(
          files.currentKeys.join(".")
        );
        const dependencyTree = {};
        for (const moduleWrapper of modulesPath) {
          const id = getPropName(moduleWrapper.node.key);
          const fn = moduleWrapper.get(
            "value.elements.0"
          );
          const dependencies = dependencyTree[id] = {};
          const dependencyProperties = moduleWrapper.get(
            "value.elements.1"
          ).node.properties;
          for (const dependency of dependencyProperties) {
            if (dependency.value.type !== "NumericLiteral" && dependency.value.type !== "StringLiteral")
              continue;
            const filePath = getPropName(dependency.key);
            const depId = dependency.value.value.toString();
            dependencies[depId] = filePath;
          }
          renameParameters(fn, ["require", "module", "exports"]);
          const file5 = t42.file(t42.program(fn.node.body.body));
          const module3 = new BrowserifyModule(
            id,
            file5,
            id === entryId,
            dependencies
          );
          modules.set(id.toString(), module3);
        }
        const resolvedPaths = resolveDependencyTree(dependencyTree, entryId);
        for (const module3 of modules.values()) {
          if (Object.hasOwn(resolvedPaths, module3.id)) {
            module3.path = resolvedPaths[module3.id];
          }
        }
        if (modules.size > 0) {
          options.bundle = new BrowserifyBundle(entryId, modules);
        }
      }
    };
  }
};

// src/unpack/webpack/unpack-webpack-4.ts
import * as t46 from "@babel/types";
import * as m51 from "@codemod/matchers";

// src/unpack/webpack/bundle.ts
import * as t44 from "@babel/types";
import * as m49 from "@codemod/matchers";

// src/unpack/webpack/esm.ts
import { statement as statement3 } from "@babel/template";
import * as t43 from "@babel/types";
import * as m46 from "@codemod/matchers";
var buildNamespaceImport = statement3`import * as NAME from "PATH";`;
var buildNamedExportLet = statement3`export let NAME = VALUE;`;
function convertESM(module3) {
  const defineEsModuleMatcher = m46.expressionStatement(
    m46.callExpression(constMemberExpression("require", "r"), [m46.identifier()])
  );
  const exportsName = m46.capture(m46.identifier());
  const exportedName = m46.capture(m46.anyString());
  const returnedValue = m46.capture(m46.anyExpression());
  const defineExportMatcher = m46.expressionStatement(
    m46.callExpression(constMemberExpression("require", "d"), [
      exportsName,
      m46.stringLiteral(exportedName),
      m46.functionExpression(
        void 0,
        [],
        m46.blockStatement([m46.returnStatement(returnedValue)])
      )
    ])
  );
  const emptyObjectVarMatcher = m46.variableDeclarator(
    m46.fromCapture(exportsName),
    m46.objectExpression([])
  );
  const properties = m46.capture(
    m46.arrayOf(
      m46.objectProperty(
        m46.identifier(),
        m46.arrowFunctionExpression([], m46.anyExpression())
      )
    )
  );
  const defineExportsMatcher = m46.expressionStatement(
    m46.callExpression(constMemberExpression("require", "d"), [
      exportsName,
      m46.objectExpression(properties)
    ])
  );
  const requireVariable = m46.capture(m46.identifier());
  const requiredModuleId = m46.capture(m46.anyNumber());
  const requireMatcher2 = m46.variableDeclaration(void 0, [
    m46.variableDeclarator(
      requireVariable,
      m46.callExpression(m46.identifier("require"), [
        m46.numericLiteral(requiredModuleId)
      ])
    )
  ]);
  const hmdMatcher = m46.expressionStatement(
    m46.assignmentExpression(
      "=",
      m46.identifier("module"),
      m46.callExpression(constMemberExpression("require", "hmd"))
    )
  );
  traverse_default(module3.ast, {
    enter(path) {
      if (path.parentPath?.parentPath) return path.skip();
      if (defineEsModuleMatcher.match(path.node)) {
        module3.ast.program.sourceType = "module";
        path.remove();
      } else if (module3.ast.program.sourceType === "module" && requireMatcher2.match(path.node)) {
        path.replaceWith(
          buildNamespaceImport({
            NAME: requireVariable.current,
            PATH: String(requiredModuleId.current)
          })
        );
      } else if (defineExportsMatcher.match(path.node)) {
        const exportsBinding = path.scope.getBinding(exportsName.current.name);
        const emptyObject = emptyObjectVarMatcher.match(
          exportsBinding?.path.node
        ) ? exportsBinding?.path.node.init : null;
        for (const property of properties.current) {
          const exportedKey = property.key;
          const returnedValue2 = property.value.body;
          if (emptyObject) {
            emptyObject.properties.push(
              t43.objectProperty(exportedKey, returnedValue2)
            );
          } else {
            exportVariable(path, returnedValue2, exportedKey.name);
          }
        }
        path.remove();
      } else if (defineExportMatcher.match(path.node)) {
        exportVariable(path, returnedValue.current, exportedName.current);
        path.remove();
      } else if (hmdMatcher.match(path.node)) {
        path.remove();
      }
    }
  });
}
function exportVariable(requireDPath, value, exportName) {
  if (value.type === "Identifier") {
    const binding = requireDPath.scope.getBinding(value.name);
    if (!binding) return;
    const declaration = findPath(
      binding.path,
      m46.or(
        m46.variableDeclaration(),
        m46.classDeclaration(),
        m46.functionDeclaration()
      )
    );
    if (!declaration) return;
    if (exportName === "default") {
      declaration.replaceWith(
        t43.exportDefaultDeclaration(
          t43.isVariableDeclaration(declaration.node) ? declaration.node.declarations[0].init : declaration.node
        )
      );
    } else {
      renameFast(binding, exportName);
      declaration.replaceWith(t43.exportNamedDeclaration(declaration.node));
    }
  } else if (exportName === "default") {
    requireDPath.insertAfter(t43.exportDefaultDeclaration(value));
  } else {
    requireDPath.insertAfter(
      buildNamedExportLet({ NAME: t43.identifier(exportName), VALUE: value })
    );
  }
}

// src/unpack/webpack/getDefaultExport.ts
import { expression as expression2 } from "@babel/template";
import * as m47 from "@codemod/matchers";
function convertDefaultRequire(bundle) {
  function getRequiredModule(path) {
    const binding = path.scope.getBinding(moduleArg.current.name);
    const declarator = binding?.path.node;
    if (declaratorMatcher.match(declarator)) {
      return bundle.modules.get(requiredModuleId.current.value.toString());
    }
  }
  const requiredModuleId = m47.capture(m47.numericLiteral());
  const declaratorMatcher = m47.variableDeclarator(
    m47.identifier(),
    m47.callExpression(m47.identifier("require"), [requiredModuleId])
  );
  const moduleArg = m47.capture(m47.identifier());
  const getterVarName = m47.capture(m47.identifier());
  const requireN = m47.callExpression(constMemberExpression("require", "n"), [
    moduleArg
  ]);
  const defaultRequireMatcher = m47.variableDeclarator(getterVarName, requireN);
  const defaultRequireMatcherAlternative = m47.or(
    constMemberExpression(requireN, "a"),
    m47.callExpression(requireN, [])
  );
  const buildDefaultAccess = expression2`OBJECT.default`;
  bundle.modules.forEach((module3) => {
    traverse_default(module3.ast, {
      "CallExpression|MemberExpression"(path) {
        if (defaultRequireMatcherAlternative.match(path.node)) {
          const requiredModule = getRequiredModule(path);
          if (requiredModule?.ast.program.sourceType === "module") {
            path.replaceWith(
              buildDefaultAccess({ OBJECT: moduleArg.current })
            );
          } else {
            path.replaceWith(moduleArg.current);
          }
        }
      },
      VariableDeclarator(path) {
        if (defaultRequireMatcher.match(path.node)) {
          const requiredModule = getRequiredModule(path);
          const init = path.get("init");
          if (requiredModule?.ast.program.sourceType === "module") {
            init.replaceWith(
              buildDefaultAccess({ OBJECT: moduleArg.current })
            );
          } else {
            init.replaceWith(moduleArg.current);
          }
          const binding = path.scope.getOwnBinding(getterVarName.current.name);
          binding?.referencePaths.forEach((refPath) => {
            if (refPath.parentPath?.isCallExpression() || refPath.parentPath?.isMemberExpression()) {
              refPath.parentPath.replaceWith(refPath);
            }
          });
        }
      },
      noScope: true
    });
  });
}

// src/unpack/webpack/varInjection.ts
import { statement as statement4 } from "@babel/template";
import * as m48 from "@codemod/matchers";
var buildVar = statement4`var NAME = INIT;`;
function inlineVarInjections(module3) {
  const { program: program5 } = module3.ast;
  const newBody = [];
  const body = m48.capture(m48.blockStatement());
  const params = m48.capture(m48.arrayOf(m48.identifier()));
  const args = m48.capture(
    m48.anyList(m48.or(m48.thisExpression(), m48.identifier("exports")), m48.oneOrMore())
  );
  const matcher17 = m48.expressionStatement(
    m48.callExpression(
      constMemberExpression(
        m48.functionExpression(void 0, params, body),
        "call"
      ),
      args
    )
  );
  for (const node of program5.body) {
    if (matcher17.match(node)) {
      const vars = params.current.map(
        (param, i) => buildVar({ NAME: param, INIT: args.current[i + 1] })
      );
      newBody.push(...vars);
      newBody.push(...body.current.body);
    } else {
      newBody.push(node);
    }
  }
  program5.body = newBody;
}

// src/unpack/webpack/bundle.ts
var WebpackBundle = class extends Bundle {
  constructor(entryId, modules) {
    super("webpack", entryId, modules);
  }
  /**
   * Undoes some of the transformations that Webpack injected into the modules.
   */
  applyTransforms() {
    this.modules.forEach(inlineVarInjections);
    this.modules.forEach(convertESM);
    convertDefaultRequire(this);
    this.replaceRequirePaths();
  }
  /**
   * Replaces `require(id)` calls with `require("./relative/path.js")` calls.
   */
  replaceRequirePaths() {
    const requireId = m49.capture(m49.or(m49.numericLiteral(), m49.stringLiteral()));
    const requireMatcher2 = m49.or(
      m49.callExpression(m49.identifier("require"), [requireId])
    );
    const importId = m49.capture(m49.stringLiteral());
    const importMatcher = m49.importDeclaration(m49.anything(), importId);
    this.modules.forEach((module3) => {
      traverse_default(module3.ast, {
        "CallExpression|ImportDeclaration": (path) => {
          let moduleId;
          let arg;
          if (requireMatcher2.match(path.node)) {
            moduleId = requireId.current.value.toString();
            [arg] = path.get("arguments");
          } else if (importMatcher.match(path.node)) {
            moduleId = importId.current.value;
            arg = path.get("source");
          } else {
            return;
          }
          const requiredModule = this.modules.get(moduleId);
          arg.replaceWith(
            t44.stringLiteral(
              relativePath(
                module3.path,
                requiredModule?.path ?? `./${moduleId}.js`
              )
            )
          );
          if (!requiredModule) {
            arg.addComment("leading", "webcrack:missing");
          }
        },
        noScope: true
      });
    });
  }
};

// src/unpack/webpack/common-matchers.ts
import * as t45 from "@babel/types";
import * as m50 from "@codemod/matchers";
function webpackRequireFunctionMatcher() {
  const containerId = m50.capture(m50.identifier());
  const webpackRequire = m50.capture(
    m50.functionDeclaration(
      m50.identifier(),
      // __webpack_require__
      [m50.identifier()],
      // moduleId
      m50.blockStatement(
        anySubList(
          m50.expressionStatement(
            m50.callExpression(
              m50.or(
                // Example (webpack 0.11.x): __webpack_modules__[moduleId].call(null, module, module.exports, __webpack_require__);
                // Example (webpack 4): __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                constMemberExpression(
                  m50.memberExpression(
                    m50.fromCapture(containerId),
                    m50.identifier(),
                    true
                  ),
                  "call"
                ),
                // Example (webpack 5): __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                m50.memberExpression(
                  m50.fromCapture(containerId),
                  m50.identifier(),
                  true
                )
              )
            )
          )
        )
      )
    )
  );
  return { webpackRequire, containerId };
}
function modulesContainerMatcher() {
  return m50.capture(
    m50.or(
      m50.arrayExpression(m50.arrayOf(m50.or(anonymousFunction(), null))),
      m50.objectExpression(
        m50.arrayOf(
          m50.or(
            m50.objectProperty(
              m50.or(m50.numericLiteral(), m50.stringLiteral(), m50.identifier()),
              anonymousFunction()
            ),
            // Example (__webpack_public_path__): { c: "" }
            m50.objectProperty(m50.identifier("c"), m50.stringLiteral())
          )
        )
      )
    )
  );
}
function getModuleFunctions(container) {
  const functions = /* @__PURE__ */ new Map();
  if (t45.isArrayExpression(container.node)) {
    container.node.elements.forEach((element, index) => {
      if (element !== null) {
        functions.set(
          index.toString(),
          container.get(`elements.${index}`)
        );
      }
    });
  } else {
    container.node.properties.forEach(
      (property, index) => {
        const key = getPropName(property.key);
        if (anonymousFunction().match(property.value)) {
          functions.set(
            key,
            container.get(`properties.${index}.value`)
          );
        }
      }
    );
  }
  return functions;
}
function findAssignedEntryId(webpackRequireBinding) {
  const entryId = m50.capture(m50.or(m50.numericLiteral(), m50.stringLiteral()));
  const assignment = m50.assignmentExpression(
    "=",
    constMemberExpression(webpackRequireBinding.identifier.name, "s"),
    entryId
  );
  for (const reference of webpackRequireBinding.referencePaths) {
    if (assignment.match(reference.parentPath?.parent)) {
      return String(entryId.current.value);
    }
  }
}
function findRequiredEntryId(webpackRequireBinding) {
  const entryId = m50.capture(m50.or(m50.numericLiteral(), m50.stringLiteral()));
  const call = m50.callExpression(
    m50.identifier(webpackRequireBinding.identifier.name),
    [entryId]
  );
  for (const reference of webpackRequireBinding.referencePaths) {
    if (call.match(reference.parent)) {
      return String(entryId.current.value);
    }
  }
}

// src/unpack/webpack/module.ts
var WebpackModule = class extends Module {
};

// src/unpack/webpack/unpack-webpack-4.ts
var unpack_webpack_4_default = {
  name: "unpack-webpack-4",
  tags: ["unsafe"],
  scope: true,
  visitor(options = { bundle: void 0 }) {
    const { webpackRequire, containerId } = webpackRequireFunctionMatcher();
    const container = modulesContainerMatcher();
    const matcher17 = m51.callExpression(
      m51.functionExpression(
        null,
        [containerId],
        m51.blockStatement(anySubList(webpackRequire))
      ),
      [container]
    );
    return {
      CallExpression(path) {
        if (!matcher17.match(path.node)) return;
        path.stop();
        const webpackRequireBinding = path.get("callee").scope.getBinding(webpackRequire.current.id.name);
        const entryId = findAssignedEntryId(webpackRequireBinding) || findRequiredEntryId(webpackRequireBinding);
        const containerPath = path.get(
          container.currentKeys.join(".")
        );
        const modules = /* @__PURE__ */ new Map();
        for (const [id, func] of getModuleFunctions(containerPath)) {
          renameParameters(func, ["module", "exports", "require"]);
          const isEntry = id === entryId;
          const file5 = t46.file(t46.program(func.node.body.body));
          const lastNode = file5.program.body.at(-1);
          if (lastNode?.trailingComments?.length === 1 && lastNode.trailingComments[0].value === "*") {
            lastNode.trailingComments = null;
          }
          modules.set(id, new WebpackModule(id, file5, isEntry));
        }
        options.bundle = new WebpackBundle(entryId ?? "", modules);
      }
    };
  }
};

// src/unpack/webpack/unpack-webpack-5.ts
import * as t47 from "@babel/types";
import * as m52 from "@codemod/matchers";
var unpack_webpack_5_default = {
  name: "unpack-webpack-5",
  tags: ["unsafe"],
  scope: true,
  visitor(options = { bundle: void 0 }) {
    const { webpackRequire, containerId } = webpackRequireFunctionMatcher();
    const container = modulesContainerMatcher();
    const matcher17 = m52.blockStatement(
      anySubList(
        // Example: var __webpack_modules__ = { ... };
        m52.variableDeclaration(void 0, [
          m52.variableDeclarator(containerId, container)
        ]),
        webpackRequire
      )
    );
    return {
      BlockStatement(path) {
        if (!matcher17.match(path.node)) return;
        path.stop();
        const webpackRequireBinding = path.scope.getBinding(
          webpackRequire.current.id.name
        );
        const entryId = findAssignedEntryId(webpackRequireBinding);
        const containerPath = path.get(
          container.currentKeys.join(".")
        );
        const modules = /* @__PURE__ */ new Map();
        for (const [id, func] of getModuleFunctions(containerPath)) {
          renameParameters(func, ["module", "exports", "require"]);
          const isEntry = id === entryId;
          const file5 = t47.file(t47.program(func.node.body.body));
          modules.set(id, new WebpackModule(id, file5, isEntry));
        }
        options.bundle = new WebpackBundle(entryId ?? "", modules);
      }
    };
  }
};

// src/unpack/webpack/unpack-webpack-chunk.ts
import * as t48 from "@babel/types";
import * as m53 from "@codemod/matchers";
var unpack_webpack_chunk_default = {
  name: "unpack-webpack-chunk",
  tags: ["unsafe"],
  scope: true,
  visitor(options = { bundle: void 0 }) {
    const container = modulesContainerMatcher();
    const jsonpGlobal = m53.capture(
      constMemberExpression(
        m53.or(m53.identifier(), m53.thisExpression()),
        m53.matcher((property) => property.startsWith("webpack"))
      )
    );
    const chunkIds = m53.capture(
      m53.arrayOf(m53.or(m53.numericLiteral(), m53.stringLiteral()))
    );
    const matcher17 = m53.callExpression(
      constMemberExpression(
        m53.assignmentExpression(
          "=",
          jsonpGlobal,
          m53.logicalExpression(
            "||",
            m53.fromCapture(jsonpGlobal),
            m53.arrayExpression([])
          )
        ),
        "push"
      ),
      [
        m53.arrayExpression(
          m53.anyList(
            m53.arrayExpression(chunkIds),
            container,
            // optional entry point like [["57iH",19,24,25]] or a function
            m53.zeroOrMore()
          )
        )
      ]
    );
    return {
      CallExpression(path) {
        if (!matcher17.match(path.node)) return;
        path.stop();
        const modules = /* @__PURE__ */ new Map();
        const containerPath = path.get(
          container.currentKeys.join(".")
        );
        for (const [id, func] of getModuleFunctions(containerPath)) {
          renameParameters(func, ["module", "exports", "require"]);
          const isEntry = false;
          const file5 = t48.file(t48.program(func.node.body.body));
          modules.set(id, new WebpackModule(id, file5, isEntry));
        }
        options.bundle = new WebpackBundle("", modules);
      }
    };
  }
};

// src/unpack/index.ts
function unpackAST(ast, mappings = {}) {
  const options = { bundle: void 0 };
  const visitor = traverse_exports.visitors.merge([
    unpack_webpack_4_default.visitor(options),
    unpack_webpack_5_default.visitor(options),
    unpack_webpack_chunk_default.visitor(options),
    unpackBrowserify.visitor(options)
  ]);
  traverse_default(ast, visitor, void 0, { changes: 0 });
  if (options.bundle) {
    options.bundle.applyMappings(mappings);
    options.bundle.applyTransforms();
    debug5("webcrack:unpack")("Bundle:", options.bundle.type);
  }
  return options.bundle;
}

// src/utils/platform.ts
function isBrowser() {
  return typeof window !== "undefined" || typeof importScripts !== "undefined";
}

// src/deobfuscate/var-transformation.ts
import * as t49 from "@babel/types";

// src/index.ts
function mergeOptions(options) {
  const mergedOptions = {
    jsx: true,
    unminify: true,
    unpack: true,
    deobfuscate: true,
    mangle: false,
    plugins: [],
    mappings: () => ({}),
    onProgress: () => {
    },
    sandbox: isBrowser() ? createBrowserSandbox() : createNodeSandbox(),
    ...options
  };
  Object.assign(options, mergedOptions);
}
async function webcrack(code, options = {}) {
  mergeOptions(options);
  options.onProgress(0);
  if (isBrowser()) {
    debug6.enable("webcrack:*");
  }
  const isBookmarklet = /^javascript:./.test(code);
  if (isBookmarklet) {
    code = code.replace(/^javascript:/, "").split(/%(?![a-f\d]{2})/i).map(decodeURIComponent).join("%");
  }
  let ast = null;
  let outputCode = "";
  let bundle;
  const plugins = loadPlugins(options.plugins);
  const stages2 = [
    () => {
      ast = parse2(code, {
        sourceType: "unambiguous",
        allowReturnOutsideFunction: true,
        errorRecovery: true,
        plugins: ["jsx"]
      });
      if (ast.errors.length) {
        debug6("webcrack:parse")("Errors", ast.errors);
      }
    },
    plugins.parse && (() => plugins.parse(ast)),
    () => {
      applyTransforms(
        ast,
        [block_statements_default, sequence_default, split_variable_declarations_default, var_functions_default],
        { name: "prepare" }
      );
    },
    plugins.prepare && (() => plugins.prepare(ast)),
    options.deobfuscate && (() => applyTransformAsync(ast, deobfuscate_default, options.sandbox)),
    plugins.deobfuscate && (() => plugins.deobfuscate(ast)),
    //() => applyTransforms(ast, [varTransformation]),
    options.unminify && (() => {
      applyTransforms(ast, [transpile_default, unminify_default]);
    }),
    plugins.unminify && (() => plugins.unminify(ast)),
    options.mangle && (() => applyTransform(
      ast,
      mangle_default,
      // @ts-expect-error - typescript cant figure out that options.mangle cant be a function in the consequent
      typeof options.mangle === "function" ? options.mangle : () => options.mangle
    )),
    // TODO: Also merge unminify visitor (breaks selfDefending/debugProtection atm)
    (options.deobfuscate || options.jsx) && (() => {
      applyTransforms(
        ast,
        [
          // Have to run this after unminify to properly detect it
          options.deobfuscate ? [self_defending_default, debug_protection_default] : [],
          options.jsx ? [jsx_default, jsx_new_default] : []
        ].flat()
      );
    }),
    options.deobfuscate && (() => applyTransforms(ast, [merge_object_assignments_default, evaluate_globals_default])),
    () => outputCode = generate(ast),
    // Unpacking modifies the same AST and may result in imports not at top level
    // so the code has to be generated before
    options.unpack && (() => bundle = unpackAST(ast, options.mappings(m54))),
    plugins.unpack && (() => plugins.unpack(ast))
  ].filter(Boolean);
  for (let i = 0; i < stages2.length; i++) {
    await stages2[i]();
    options.onProgress(100 / stages2.length * (i + 1));
  }
  return {
    code: outputCode,
    bundle,
    async save(path) {
      const { mkdir, writeFile } = await import("node:fs/promises");
      path = normalize2(path);
      await mkdir(path, { recursive: true });
      await writeFile(join3(path, "deobfuscated.js"), outputCode, "utf8");
      await bundle?.save(path);
    }
  };
}
export {
  webcrack
};
//# sourceMappingURL=index.js.map
