import { getUserAccounts } from "@/actions/dashboard";
import AccountCard from "@/components/account-card";
import CreateAccountDrawer from "@/components/create-account-drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

async function DashboardPage () {

  const accounts = await getUserAccounts();

  return (
    <div className="px-4">

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer >
          <Card className="p-4 visa-card cursor-pointer
            hover:shadow-2xl hover:scale-95 transition duration-300 ease-in-out flex flex-col items-center justify-center">
            <CardContent className="text-muted-foreground flex flex-col items-center">
              <Plus className="h-10 w-10 mb-2 text-white" />
              <p className="text-sm font-medium text-white">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.length > 0 && accounts?.map((account) =>{
          return ( 
              <AccountCard key={account.id} account={account} />
          );
        })}

      </div>
    </div>
  );
}

export default DashboardPage;


{/* <Card key={account.id} className="p-4 visa-card cursor-pointer
              hover:shadow-2xl hover:scale-95 transition duration-300 ease-in-out">
              <CardContent className="text-muted-foreground flex flex-col items-center">
                <p className="text-sm font-medium text-white">{account.name}</p>
                <p className="text-sm font-medium text-white">{account.type}</p>
                <p className="text-sm font-medium text-white">{account.balance}</p>
              </CardContent>
            </Card> */}