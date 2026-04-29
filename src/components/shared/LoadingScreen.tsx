interface LoadingScreenProps {
  containerClassName: string;
}

export default function LoadingScreen({ containerClassName }: LoadingScreenProps) {
  return (
    <div className={containerClassName}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eee",
        }}
      >
        読み込み中...
      </div>
    </div>
  );
}
