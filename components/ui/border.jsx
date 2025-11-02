export default function ZigZagDivider() {
  return (
    <div className="w-full border border-emerald-500 bg-neutral-950 overflow-hidden flex justify-center">
      <div
        className="w-full"
        style={{
          height: '4rem',
          backgroundColor: 'rgb(10, 10, 10)', // neutral background
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #45cb85,
            transparent 2px,
            transparent 12px
          )`,
        }}
      />
    </div>
  );
}