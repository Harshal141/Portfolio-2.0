"use client";


type LinkLikeProps = React.PropsWithChildren<{
  href?: string;
  disableLinks?: boolean;
  className?: string;
  style?: React.CSSProperties;
}>;

export function LinkLike({
  href,
  disableLinks,
  className,
  style,
  children,
}: LinkLikeProps) {
  if (!href || disableLinks)
    return (
      <span className={className} style={style}>
        {children}
      </span>
    );
  return (
    <a href={href} className={className} style={style}>
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
    "rounded-md border border-dotted border-neutral-700/60 shadow-lg backdrop-blur-[1px] p-3 md:p-4 my-3";
  const anim = disableAnimations
    ? "no-animate"
    : "transition-transform duration-300 hover:scale-[1.01]";
  const cls = `${base} ${anim} ${className}`.trim();
  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}