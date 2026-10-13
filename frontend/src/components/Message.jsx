export default function Message({ type = "info", children }) {
  if (!children) return null;
  const role = type === "error" ? "alert" : "status";
  return <div className={`message message-${type}`} role={role}>{children}</div>;
}
