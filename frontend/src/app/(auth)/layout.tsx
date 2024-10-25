export default function AuthLayoutRoute({ children }: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted">
      {children}
    </div>
  );
}