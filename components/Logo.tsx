export function CoyoteMark({ className = "" }: { className?: string }) {
  // A simple howling-coyote silhouette mark
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M52 6c-1.2 2.3-2.1 4.7-2.6 7.2-2.4-1.1-5-1.7-7.7-1.7-3.6 0-7 1-9.9 2.7-1.4-1-3-1.8-4.7-2.2l1.4 4.1c-4.9 2.6-8.6 7.1-10.1 12.5L9 27l7.2 3.4c-.1.8-.2 1.7-.2 2.6 0 3 .8 5.8 2.1 8.2L11 56l8.4-9.6c1.5 1.3 3.2 2.4 5.1 3.1L23 58h4l1.8-7.7c1 .15 2.1.23 3.2.23 1.1 0 2.2-.08 3.2-.23L37 58h4l-1.5-8.5c4.9-1.9 8.7-5.9 10.3-10.9l4.2-1.1-3.6-2.7c.1-.5.1-1.1.1-1.6 0-6.2-3.4-11.6-8.4-14.5 2.1-1.9 4.6-3.3 7.4-4.1L52 6z" />
    </svg>
  );
}
