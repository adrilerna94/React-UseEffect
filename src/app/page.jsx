import { Typography } from "@/components/ui";
import SensorsPage from "./sensors/page";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-10">
      <Typography variant="h1" color="amber" className="font-bold text-center">
        Control de Misión
      </Typography>
      <section>
        <SensorsPage />
      </section>
    </main>
  );
}
