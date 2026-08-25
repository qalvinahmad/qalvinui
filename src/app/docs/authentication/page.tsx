export default function AuthenticationPage() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-3xl space-y-10">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Authentication</h1>
        <p className="text-lg text-muted-foreground">
          Build secure authentication flows with Qalvin UI components.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Login Form</h2>
        <p className="text-muted-foreground">
          A complete login form with email and password validation:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>Enter your credentials to sign in</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </CardContent>
    </Card>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Registration Form</h2>
        <p className="text-muted-foreground">
          A registration form with password confirmation:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function RegisterForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions
            </Label>
          </div>
          <Button type="submit" className="w-full">Create Account</Button>
        </form>
      </CardContent>
    </Card>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Password Reset</h2>
        <p className="text-muted-foreground">
          A password reset form:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ResetPasswordForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Reset password</CardTitle>
        <CardDescription>Enter your email to receive reset instructions</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <Button type="submit" className="w-full">Send Reset Link</Button>
        </form>
      </CardContent>
    </Card>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Two-Factor Authentication</h2>
        <p className="text-muted-foreground">
          A 2FA verification form with OTP input:
        </p>
        <div className="rounded-lg border bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
          <pre className="text-foreground/80">{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function TwoFactorForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Two-factor authentication</CardTitle>
        <CardDescription>Enter the code from your authenticator app</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Verification code</Label>
            <Input id="code" placeholder="000000" maxLength={6} required />
          </div>
          <Button type="submit" className="w-full">Verify</Button>
        </form>
      </CardContent>
    </Card>
  )
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Security Best Practices</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6">
          <li><strong className="text-foreground font-semibold">Server-Side Validation:</strong> Always validate credentials on the server</li>
          <li><strong className="text-foreground font-semibold">HTTPS:</strong> Use HTTPS for all authentication endpoints</li>
          <li><strong className="text-foreground font-semibold">Password Hashing:</strong> Hash passwords with bcrypt or Argon2</li>
          <li><strong className="text-foreground font-semibold">Rate Limiting:</strong> Implement rate limiting to prevent brute force attacks</li>
          <li><strong className="text-foreground font-semibold">Session Management:</strong> Use secure, httpOnly cookies for sessions</li>
        </ul>
      </div>
    </div>
  )
}
