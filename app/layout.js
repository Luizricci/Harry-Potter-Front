import "../styles/globals.css";
export const metadata = {
  title: "Harry Potter",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
);
}
