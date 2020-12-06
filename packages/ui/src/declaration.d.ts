type SvgrComponent = React.FC<React.SVGAttributes<SVGElement>>;

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
