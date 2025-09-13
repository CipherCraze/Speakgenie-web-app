export default function Head() {
  return (
    <>
      <title>SpeakGenie</title>

      {/* Primary favicon - use Speakgenielogo.png in public folder */}
      <link rel="icon" href="/Speakgenielogo.png" />

      {/* Recommended PNG sizes (fallbacks) */}
      <link rel="icon" type="image/png" sizes="32x32" href="/Speakgenielogo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/Speakgenielogo.png" />

      {/* Apple touch icon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/Speakgenielogo.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="SpeakGenie - Learn languages with interactive lessons and AI-powered tools." />
      <meta name="theme-color" content="#10b981" />
    </>
  );
}
