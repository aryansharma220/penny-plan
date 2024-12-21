"use client"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { accountSchema } from "@/app/lib/schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import useFetch from "@/hooks/use-fetch";
import { createAccount } from "@/actions/dashboard";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const CreateAccountDrawer = ({ children }) => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });

  const { data: newAccount, error, fn: createAccountFn, loading: createAccountLoading } = useFetch(createAccount);

  useEffect(() => {
    if (newAccount && !createAccountLoading) {
      toast.success("Account created successfully");
      reset();
      setOpen(false); // Close the drawer here
    }
  }, [newAccount, createAccountLoading]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to create account");
    }
  }, [error]);

  const onHandleSubmit = async (data) => {
    await createAccountFn(data);
  };

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create New Account</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-4">
            <form className="space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-900">
                  Account Name
                </label>
                <Input id="name" placeholder="Account Name" {...register("name")} />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-gray-900">
                  Account Type
                </label>
                <Select onValueChange={(value) => setValue("type", value)} value={watch("type")}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Select Account Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CURRENT">Current</SelectItem>
                    <SelectItem value="SAVINGS">Savings</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && <p className="text-sm text-red-500">{errors.type.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="balance" className="text-sm font-medium text-gray-900">
                  Initial Balance
                </label>
                <Input id="balance" type="number" step="0.01" placeholder="0.00" {...register("balance")} />
                {errors.balance && <p className="text-sm text-red-500">{errors.balance.message}</p>}
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="space-y-0.5">
                  <label htmlFor="isDefault" className="text-sm font-medium text-gray-900">
                    Set as Default
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Set this account as your default account for transactions
                  </p>
                </div>
                <Switch
                  id="isDefault"
                  checked={watch("isDefault")}
                  onCheckedChange={(value) => setValue("isDefault", value)}
                />
              </div>
              {/* Submit Button */}
              <Button type="submit" variant="default" disabled={createAccountLoading} className="bg-emerald-800 hover:bg-emerald-600 w-full">
                {createAccountLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </div>
          <DrawerFooter>
            {/* Cancel Button */}
            <DrawerClose asChild>
              <Button type="button" variant="outline" className="text-black hover:text-red-800 w-full">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CreateAccountDrawer;
