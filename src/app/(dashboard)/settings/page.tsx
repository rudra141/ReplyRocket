'use client';
import { useUser, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Mock data
const MOCK_IS_PRO = false;

export default function SettingsPage() {
  const { user } = useUser();

  const handleDeleteAccount = () => {
    // In a real app, this would trigger a more complex flow,
    // possibly involving user.delete() from Clerk and server-side cleanup.
    console.log("Account deletion initiated.");
  }

  if (!user) {
    return null;
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account details and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={user.primaryEmailAddress?.emailAddress || 'No email found'} readOnly disabled />
          </div>
          <div className="space-y-2">
            <Label>Current Plan</Label>
            <p className="font-semibold">{MOCK_IS_PRO ? "Pro Plan" : "Free Plan"}</p>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <SignOutButton>
            <Button variant="outline">Logout</Button>
          </SignOutButton>
        </CardFooter>
      </Card>
      
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle>Danger Zone</CardTitle>
          <CardDescription>These actions are irreversible. Please proceed with caution.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-lg border border-destructive bg-destructive/10 p-4">
            <div>
              <Label htmlFor="delete-account" className="font-semibold text-destructive">Delete Account</Label>
              <p className="text-sm text-destructive/80">Permanently delete your account and all associated data.</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to delete your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This is a permanent action. All your data, including generation history, will be erased and cannot be recovered.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteAccount}>Yes, delete my account</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
