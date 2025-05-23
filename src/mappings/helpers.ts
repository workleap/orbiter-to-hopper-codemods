import { JSXAttribute } from "jscodeshift";
import {
  HopperStyledSystemPropsKeys,
  StyledSystemPropertyMapper,
} from "./styled-system/types.js";

export function tryGettingLiteralValue(
  value: JSXAttribute["value"]
): string | number | boolean | RegExp | null {
  if (value == null) {
    return null;
  } else if (value.type === "Literal") {
    return value.value;
  } else if (
    value.type === "StringLiteral" ||
    value.type === "NumericLiteral"
  ) {
    // Add support for StringLiteral type
    return value.value;
  } else if (value.type === "JSXExpressionContainer") {
    if (value.expression.type === "Identifier") {
      return value.expression.name;
    } else if (value.expression.type === "Literal") {
      return value.expression.value;
    } else if (
      value.expression.type === "StringLiteral" ||
      value.expression.type === "NumericLiteral"
    ) {
      // Add support for StringLiteral in expressions
      return value.expression.value;
    }
  }
  return null;
}

export function isGlobalValue(
  value: string | boolean | number | RegExp,
  extra?: (string | number)[]
): boolean {
  return (
    (typeof value === "string" || typeof value === "number") &&
    [
      "-moz-initial",
      "inherit",
      "initial",
      "revert",
      "revert-layer",
      "unset",
      ...(extra || []),
    ].includes(value)
  );
}

export function isSimpleMarginTokenValue(
  value: string | boolean | RegExp
): boolean {
  return (
    typeof value === "string" &&
    [
      "stack-xs",
      "stack-sm",
      "stack-md",
      "stack-lg",
      "stack-xl",
      "inline-xs",
      "inline-sm",
      "inline-md",
      "inline-lg",
      "inline-xl",
    ].includes(value)
  );
}

export function isPaddingTokenValue(
  value: string | boolean | RegExp,
  allowComplexPadding: boolean
): boolean {
  return (
    typeof value === "string" &&
    (["inset-xs", "inset-sm", "inset-md", "inset-lg", "inset-xl"].includes(
      value
    ) ||
      (allowComplexPadding &&
        [
          "inset-squish-sm",
          "inset-squish-md",
          "inset-squish-lg",
          "inset-stretch-sm",
          "inset-stretch-md",
          "inset-stretch-lg",
        ].includes(value)))
  );
}

export function isPercentageValue(
  value: string | number | boolean | RegExp
): boolean {
  return typeof value === "string" && /^-?\d+(\.\d+)?%$/.test(value);
}

export function isFrValue(value: string | number | boolean | RegExp): boolean {
  return typeof value === "string" && /^-?\d+(\.\d+)?fr$/.test(value);
}

export function hasSameKey(key: string, source: object, target: object) {
  return Object.keys(source).includes(key) && Object.keys(target).includes(key);
}

export function hasCoreVersionKey(key: string, source: object, target: object) {
  return (
    Object.keys(source).includes(key) &&
    Object.keys(target).includes(`core_${key}`)
  );
}
