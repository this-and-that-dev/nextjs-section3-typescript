import ClientComponent from "@/app/(with-searchbar)/client-component";
import ServerComponent from "@/app/(with-searchbar)/server-component";

export default function Home() {
  return (
    <div>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
