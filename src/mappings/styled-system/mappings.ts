import {
  alignContentMapper,
  alignItemsMapper,
  alignSelfMapper,
} from "./styles/alignments.js";
import {
  borderBottomLeftRadiusMapper,
  borderBottomRightRadiusMapper,
  borderRadiusMapper,
  borderTopLeftRadiusMapper,
  borderTopRightRadiusMapper,
} from "./styles/borderRadius.js";
import {
  borderActiveMapper,
  borderBottomActiveMapper,
  borderBottomFocusMapper,
  borderBottomHoverMapper,
  borderBottomMapper,
  borderFocusMapper,
  borderHoverMapper,
  borderLeftActiveMapper,
  borderLeftFocusMapper,
  borderLeftHoverMapper,
  borderLeftMapper,
  borderMapper,
  borderRightActiveMapper,
  borderRightFocusMapper,
  borderRightHoverMapper,
  borderRightMapper,
  borderTopActiveMapper,
  borderTopFocusMapper,
  borderTopHoverMapper,
  borderTopMapper,
} from "./styles/borders.js";
import {
  backgroundColorActiveMapper,
  backgroundColorFocusMapper,
  backgroundColorHoverMapper,
  backgroundColorMapper,
  colorActiveMapper,
  colorFocusMapper,
  colorHoverMapper,
  colorMapper,
} from "./styles/colors.js";
import { columnGapMapper, gapMapper, rowGapMapper } from "./styles/gap.js";
import {
  gridAreaMapper,
  gridAutoColumnsMapper,
  gridAutoFlowMapper,
  gridAutoRowsMapper,
  gridColumnEndMapper,
  gridColumnMapper,
  gridColumnSpanMapper,
  gridColumnStartMapper,
  gridMapper,
  gridRowEndMapper,
  gridRowMapper,
  gridRowSpanMapper,
  gridRowStartMapper,
  gridTemplateAreasMapper,
  gridTemplateColumnsMapper,
  gridTemplateMapper,
  gridTemplateRowsMapper,
} from "./styles/grid.js";
import {
  marginBottomMapper,
  marginLeftMapper,
  marginMapper,
  marginRightMapper,
  marginTopMapper,
  marginXMapper,
  marginYMapper,
} from "./styles/margins.js";
import {
  paddingBottomMapper,
  paddingLeftMapper,
  paddingMapper,
  paddingRightMapper,
  paddingTopMapper,
  paddingXMapper,
  paddingYMapper,
} from "./styles/paddings.js";
import {
  heightMapper,
  maxHeightMapper,
  maxWidthMapper,
  minHeightMapper,
  minWidthMapper,
  widthMapper,
} from "./styles/sizings.js";
import { StyledSystemPropsMapping } from "./types.js";

export const styledSystemPropsMappings: StyledSystemPropsMapping = {
  width: widthMapper,
  height: heightMapper,
  maxWidth: maxWidthMapper,
  maxHeight: maxHeightMapper,
  minHeight: minHeightMapper,
  minWidth: minWidthMapper,
  gap: gapMapper,
  rowGap: rowGapMapper,
  columnGap: columnGapMapper,
  margin: marginMapper,
  marginBottom: marginBottomMapper,
  marginLeft: marginLeftMapper,
  marginRight: marginRightMapper,
  marginTop: marginTopMapper,
  marginX: marginXMapper,
  marginY: marginYMapper,
  padding: paddingMapper,
  paddingBottom: paddingBottomMapper,
  paddingLeft: paddingLeftMapper,
  paddingRight: paddingRightMapper,
  paddingTop: paddingTopMapper,
  paddingX: paddingXMapper,
  paddingY: paddingYMapper,
  alignContent: alignContentMapper,
  alignItems: alignItemsMapper,
  alignSelf: alignSelfMapper,
  border: borderMapper,
  borderBottom: borderBottomMapper,
  borderBottomActive: borderBottomActiveMapper,
  borderBottomFocus: borderBottomFocusMapper,
  borderBottomHover: borderBottomHoverMapper,
  borderBottomLeftRadius: borderBottomLeftRadiusMapper,
  borderBottomRightRadius: borderBottomRightRadiusMapper,
  borderActive: borderActiveMapper,
  borderFocus: borderFocusMapper,
  borderHover: borderHoverMapper,
  borderLeft: borderLeftMapper,
  borderLeftActive: borderLeftActiveMapper,
  borderLeftFocus: borderLeftFocusMapper,
  borderLeftHover: borderLeftHoverMapper,
  borderRadius: borderRadiusMapper,
  borderRight: borderRightMapper,
  borderRightActive: borderRightActiveMapper,
  borderRightFocus: borderRightFocusMapper,
  borderRightHover: borderRightHoverMapper,
  borderTop: borderTopMapper,
  borderTopActive: borderTopActiveMapper,
  borderTopFocus: borderTopFocusMapper,
  borderTopHover: borderTopHoverMapper,
  borderTopLeftRadius: borderTopLeftRadiusMapper,
  borderTopRightRadius: borderTopRightRadiusMapper,
  color: colorMapper,
  colorActive: colorActiveMapper,
  colorFocus: colorFocusMapper,
  colorHover: colorHoverMapper,
  backgroundColor: backgroundColorMapper,
  backgroundColorActive: backgroundColorActiveMapper,
  backgroundColorFocus: backgroundColorFocusMapper,
  backgroundColorHover: backgroundColorHoverMapper,
  grid: gridMapper,
  gridArea: gridAreaMapper,
  gridAutoColumns: gridAutoColumnsMapper,
  gridAutoFlow: gridAutoFlowMapper,
  gridAutoRows: gridAutoRowsMapper,
  gridColumn: gridColumnMapper,
  gridColumnEnd: gridColumnEndMapper,
  gridColumnSpan: gridColumnSpanMapper,
  gridColumnStart: gridColumnStartMapper,
  gridRow: gridRowMapper,
  gridRowEnd: gridRowEndMapper,
  gridRowSpan: gridRowSpanMapper,
  gridRowStart: gridRowStartMapper,
  gridTemplate: gridTemplateMapper,
  gridTemplateAreas: gridTemplateAreasMapper,
  gridTemplateColumns: gridTemplateColumnsMapper,
  gridTemplateRows: gridTemplateRowsMapper,
  aspectRatio: "aspectRatio",
  backgroundImage: "backgroundImage",
  backgroundPosition: "backgroundPosition",
  backgroundRepeat: "backgroundRepeat",
  backgroundSize: "backgroundSize",
  bottom: "bottom",
  boxShadow: "boxShadow",
  boxShadowActive: "boxShadowActive",
  boxShadowFocus: "boxShadowFocus",
  boxShadowHover: "boxShadowHover",
  content: "content",
  contentVisibility: "contentVisibility",
  cursor: "cursor",
  cursorHover: "cursorHover",
  display: "display",
  fill: "fill",
  fillFocus: "fillFocus",
  fillHover: "fillHover",
  filter: "filter",
  flex: "flex",
  flexBasis: "flexBasis",
  flexDirection: "flexDirection",
  flexFlow: "flexFlow",
  flexGrow: "flexGrow",
  flexShrink: "flexShrink",
  flexWrap: "flexWrap",
  fontFamily: "fontFamily",
  fontSize: "fontSize",
  fontStyle: "fontStyle",
  fontWeight: "fontWeight",
  justifyContent: "justifyContent",
  justifyItems: "justifyItems",
  justifySelf: "justifySelf",
  left: "left",
  letterSpacing: "letterSpacing",
  lineHeight: "lineHeight",
  objectFit: "objectFit",
  objectPosition: "objectPosition",
  opacity: "opacity",
  opacityActive: "opacityActive",
  opacityFocus: "opacityFocus",
  opacityHover: "opacityHover",
  order: "order",
  outline: "outline",
  outlineFocus: "outlineFocus",
  overflow: "overflow",
  overflowX: "overflowX",
  overflowY: "overflowY",
  pointerEvents: "pointerEvents",
  position: "position",
  resize: "resize",
  right: "right",
  stroke: "stroke",
  textAlign: "textAlign",
  textDecoration: "textDecoration",
  textOverflow: "textOverflow",
  textTransform: "textTransform",
  top: "top",
  transform: "transform",
  transformOrigin: "transformOrigin",
  transformStyle: "transformStyle",
  verticalAlign: "verticalAlign",
  visibility: "visibility",
  whiteSpace: "whiteSpace",
  willChange: "willChange",
  wordBreak: "wordBreak",
  zIndex: "zIndex",
};
