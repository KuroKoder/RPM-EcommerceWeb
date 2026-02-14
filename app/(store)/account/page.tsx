"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/Button";
import { createClient } from "@/lib/supabase/client";
import { User, Package, Settings, LogOut, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
        setLoading(false);
      }
    });
  }, [router]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) return <div className="py-20 text-center text-xs uppercase tracking-widest">Loading Account...</div>;

  return (
    <Container className="py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr]">
        
        {/* Sidebar Navigasi */}
        <aside className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter">My Account</h1>
            <p className="text-sm text-neutral-500">{user?.email}</p>
          </div>

          <nav className="flex flex-col gap-1">
            <AccountNavLink icon={<User size={16} />} label="Profile" active />
            <AccountNavLink icon={<Package size={16} />} label="Orders" />
            <AccountNavLink icon={<MapPin size={16} />} label="Addresses" />
            <AccountNavLink icon={<Settings size={16} />} label="Settings" />
            <button 
              onClick={handleLogout}
              className="mt-4 flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Konten Utama */}
        <main className="space-y-10">
          {/* Section Profile */}
          <section className="rounded-2xl border border-neutral-100 bg-white p-6 md:p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold">Personal Information</h2>
              <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest">Edit</Button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InfoField label="Full Name" value={user?.user_metadata?.full_name || "Not set"} />
              <InfoField label="Email Address" value={user?.email} />
              <InfoField label="Phone Number" value={user?.phone || "Not set"} />
              <InfoField label="Account Created" value={new Date(user?.created_at).toLocaleDateString()} />
            </div>
          </section>

          {/* Section Order Terakhir (Placeholder) */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold">Recent Orders</h2>
            <div className="rounded-2xl border border-dashed border-neutral-200 py-12 text-center">
              <Package className="mx-auto mb-3 h-8 w-8 text-neutral-300" />
              <p className="text-sm text-neutral-500">You haven't placed any orders yet.</p>
              <Button variant="primary" size="sm" className="mt-4" onClick={() => router.push("/products")}>
                Start Shopping
              </Button>
            </div>
          </section>
        </main>
      </div>
    </Container>
  );
}

// Komponen Kecil untuk UI yang Bersih
function AccountNavLink({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-black text-white" : "text-neutral-500 hover:bg-neutral-100 hover:text-black"}`}>
      {icon}
      {label}
    </button>
  );
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{label}</p>
      <p className="text-sm font-medium text-black">{value}</p>
    </div>
  );
}