import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Rocket } from "lucide-react";

export default function AIAgencyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-4 text-gray-800">
      <header className="flex justify-between items-center py-6 px-4 border-b border-gray-300">
        <h1 className="text-3xl font-bold text-blue-600">BHG.AI Agency</h1>
        <Button className="bg-blue-600 text-white">Book a Free Audit</Button>
      </header>

      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-4">Automate Your Business with AI</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We help service businesses, coaches, and startups save 100+ hours/month using ChatGPT, Zapier, Notion, and automation tools.
        </p>
        <Button className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700">Get Started</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12 max-w-6xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <Rocket className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">AI Chatbots</h3>
            <p>Create custom ChatGPT bots for WhatsApp, websites, and customer service.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <Rocket className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Workflow Automation</h3>
            <p>Automate lead capture, follow-ups, and daily tasks with Zapier/Make/Notion.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <Rocket className="text-blue-500 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Client Dashboards</h3>
            <p>Design smart dashboards and internal tools with Airtable, Notion, Retool.</p>
          </CardContent>
        </Card>
      </section>

      <section className="px-4 py-12 bg-white border-t border-gray-300">
        <h3 className="text-2xl font-bold text-center mb-6">Book Your Free AI Audit</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email or WhatsApp" />
          <Input placeholder="Business Type or Website" />
          <Button className="w-full bg-blue-600 text-white">Submit</Button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 BHG.AI Digital Solutions. All rights reserved.
      </footer>
    </div>
  );
}
