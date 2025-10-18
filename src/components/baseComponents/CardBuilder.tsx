"use client";

type LinkLikeProps = React.PropsWithChildren<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    disableLinks?: boolean;
  }
>;

export function LinkLike({
  href,
  disableLinks,
  children,
  ...rest
}: LinkLikeProps) {
  if (!href || disableLinks) {
    return <span {...rest}>{children}</span>;
  }
  return (
    <a href={href} {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}


type CardBaseProps = React.PropsWithChildren<{
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
}>;

export function CardBase({
  className = "",
  disableAnimations,
  style,
  children,
}: CardBaseProps) {
  const base =
    "rounded-md border border-dashed border-neutral-700/60 shadow-lg backdrop-blur-[1px] p-3 md:p-4 my-3";
  const anim = disableAnimations
    ? "no-animate"
    : "transition-transform duration-300 hover:scale-[1.01] hover:border-purple-400";
  const cls = `${base} ${anim} ${className}`.trim();
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}