export default function Layout({ children }) {
    return (
      <div className="min-h-screen bg-whitesupremacist">
        <header className="bg-main text-white p-4">
          <h1 className="text-2xl font-bold">Budget Buddy</h1>
        </header>
        <main className="p-4">{children}</main>
      </div>
    );
  }