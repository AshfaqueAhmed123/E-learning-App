import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

const Login = () => {

  const [loginInput, setLoginInput] = useState({ email: "", password: "" })

  const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" })

  const changeInputHandler = (e,type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  }

  const handleRegisteration = (type) => {
    const inputData = type == "signup" ? signupInput : loginInput
    console.log(inputData);
  }


  return (
    <div className="flex items-center w-full justify-center ">
      <Tabs defaultValue="Signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new Account and click signup when you are done
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input 
                onChange={(e) => changeInputHandler(e,"signup")}
                name="name"
                value={signupInput.name} 
                id="name" 
                type="text" 
                placeholder="eg : Ashfaque" 
                required={true}
                 />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input 
                onChange={(e) => changeInputHandler(e,"signup")} 
                name="email"
                value={signupInput.email}
                id="email" type="email" 
                placeholder="eg : exmaple@gmail.com" 
                required={true}
                 />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input 
                onChange={(e) => changeInputHandler(e,"signup")} 
                name="password"
                value={signupInput.password}
                id="password" type="password" 
                placeholder="password" 
                required={true} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegisteration("signup")}>Create Account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                login your password here. After signup , you will be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input 
                onChange={(e) => changeInputHandler(e,"login")} 
                name="email"
                value={loginInput.email}
                id="email" type="Login" 
                required={true} 
                placeholder="example@gmail.com"
                 />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">password</Label>
                <Input 
                onChange={(e) => changeInputHandler(e,"login")}
                name="password"
                value={loginInput.password} 
                id="password" type="password"
                required={true} 
                placeholder="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleRegisteration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login