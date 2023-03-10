import { LayoutType } from "../types";

function Text({ children }: LayoutType) {
  return <div>Text</div>;
}

function PageTitle({ children }: LayoutType) {
  return <div className="font-semibold text-base text-white">{children}</div>;
}

function PageHeading({ children }: LayoutType) {
  return (
    <div className="text-white font-semibold text-2xl pb-2">{children}</div>
  );
}

function Paragraph({ children }: LayoutType) {
  return <p className="text-xs text-base-500 font-light">{children}</p>;
}

Text.PageTitle = PageTitle;
Text.PageHeading = PageHeading;
Text.Paragraph = Paragraph;

export default Text;
