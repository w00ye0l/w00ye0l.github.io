export default function TestPage() {
  return (
    <>
      <div className="size-20 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#dc2626"
            strokeWidth="2"
            strokeDasharray="70.69 70.69 70.69 70.69"
            strokeDashoffset="75.69"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="#dc2626"
            strokeWidth="2"
            strokeDasharray="47.12 47.12 47.12 47.12"
            strokeDashoffset="-5"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}
