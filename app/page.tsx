import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Test App</h1>
      <a href="/api/users">All users</a>
      <p>Or try to hit /users/api manually</p>
    </main>
  );
}
