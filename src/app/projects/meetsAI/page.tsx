import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { AreaChartHero } from "@/components/tremor-components/areachart";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full pb-24 flex flex-col max-w-3xl p-6 gap-4 md:pt-8 md:px-8 md:pb-24 md:gap-6 lg:gap-8 lg:pt-16 lg:px-16 lg:pb-24 self-center">
      
      <Button asChild size="default" variant="outline" className="w-fit">
        <Link href="/projects" className="flex flex gap-2">
          <ArrowLeftCircle className="h-4 w-4" aria-label="Back" /> Projects
        </Link>
      </Button>

      <article>

        <h1> Linkme </h1>
        <p> Link.me is a payment link app that empowers digital and brick-and-mortar businesses to sell products and services online without a website. </p>
        <p> I worked as a Product Designer at Link.me, leading the product strategy and design for the mobile team by creating a culture deeply oriented around customers with research. </p>
        <img src="../projects/linkme/linkme_home.png" alt="" />

        <h2> Perfecting the Management </h2>
        <p> In 2019, Pagar.me released a payment link app for 100 companies in Brazil. By 2020, Link.me has transacted over 100 million payments with over 5.000 companies. </p>
        <p> When Brazil started the lockdown due to Covid-19, the app became the most reliable solution to help small businesses survive by selling online and shift into digital. </p>
        <p> The Link.me app struggled to scale alongside the company's hyper-growth. The product strategy started to slip as several features competed for attention and the app performance issues increased. </p>
        <p> Our challenge was to evolve the service with new customers and address their pain points to increase our activation rate and decrease our high churn rates. </p>
        <img src="../projects/linkme/linkme_first_section.png" alt="" />
        <h2> Making sense of the strategy mess </h2>
        <p> When I joined the team as their first product designer, they were stuck deciding features to match our competitors in the market. Even though this strategy has its benefits, it was not helping us to increase our activation rate and reduce our churn. </p>
        <p> To distinguish ourselves in an already competitive and mature market, we needed user research to help us translate insights into features that address customer's behaviors and motivations. </p>
        <p> Without pre-existing insights, I partnered with our product manager and the lead developer to explore how our customers were getting around. </p>
        <img src="../projects/linkme/linkme_research.png" alt="" />
        <h2>How do you use Link.me? </h2>
        <p> We interviewed 15 customers to learn about the expectations and ideas for improvement they had about our product. We also asked customers to walk us through how they complete their management tasks and their daily frustrations. </p>
        <div className="flex flex-col gap-8 mb-4">
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/linkme/Illustration1.svg" alt="" />
            <div className="content-center">
              <h3> "I can't give acw-24 h-24 md:w-40 md:h-40cess to my employees." </h3>
              <p> The business owner did not feel protected inviting SolarPanels to his company account because they would see all its balance, sales, and withdrawal money. </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/linkme/Illustration2.svg" alt="" />
            <div className="content-center">
              <h3> "I can't manage solely on my phone." </h3>
              <p> Customers needed a consolidated view and flow to manage the spreadsheets from custom tools on their computers besides Link.me. </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/linkme/Illustration3.svg" alt="" />
            <div className="content-center">
              <h3> "I don't know how much I paid" </h3>
              <p> Customers expressed that executing payment conciliation at the end of the month was extremely hard considering Link.me didn't provide expense reports. </p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <img className="w-24 h-24 md:w-40 md:h-40 rounded-full" src="../projects/linkme/Illustration4.svg" alt="" />
            <div className="content-center">
              <h3> "I need a faster cash flow." </h3>
              <p> Link.me only offered two anticipation models, 30 days and 15 days. Still, it wasn't fast enough to ensure cash flow for some kinds of businesses. </p>
            </div>
          </div>
        </div>
        <p> In Brazil, credit card payments in installments are popular, accounting for 80% of e-commerce payments for businesses with a high transaction value. These are collected month-by-month by the merchant (ranging from two to 12 months). </p>
        <h2> Connecting Physical and Digital Worlds </h2>
        <p> With these insights combined with our product analytics, it was clear that digital and physical businesses were churning for different reasons. </p>
        <p> The brick-and-mortar businesses suffered from the beginning of the experience since we didn't offer an anticipation model that suits their cash flow management. </p>
        <p> Digital businesses suffered after experiencing growth because they couldn't distribute our product to their sales team since we only had admin access. </p>
        <img src="../projects/linkme/linkme_framework.png" alt="" />
        <p> These findings were challenging to address because we needed different teams with diverse priorities. However, the time and energy spent to solve these issues were essential to help businesses survive during the pandemic. </p>
        <h2> Improving Link.me </h2>
        <p> Link.me was initially created for digital companies focused on the mobile app. By 2020, tables have turned as physical businesses started to shift into digital. With the new strategy and insights, we improved Link.me to be more competitive and accessible for fast-growing companies. </p>
        <img src="../projects/linkme/testingg.webp" alt="" />
        <h3> New management levels for merchants </h3>
        <p> We created the sales profile to help business owners manage their employees' access to the product by removing sensitive information and focusing on selling features. </p>
        <img src="../projects/linkme/testingg.webp" alt="" />
        <h3> From mobile to desktop </h3>
        <p> We created personalized access for our customers to access Link.me information on the Pagar.me web platform, creating a consolidated view and flow to manage finances. </p>
        <img src="../projects/linkme/testingg.webp" alt="" />
        <h3> New anticipation models </h3>
        <p> We managed to offer a new anticipation model of 2 days to ensure that all businesses could adapt their cash flow management to our service. Also, we restrained the payments fraud and e-commerce risk at their lowest levels. </p>
        <h2> Results </h2>
        <p> The launch of the new features and communication of the Link.me app on iOS and Android had a significant impact on engagement, retention, adoption, and acquisition metrics. </p>

        <div className="grid grid-rows mt-4 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardDescription> Growth </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription> Activation Rate </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription> Churn Rate </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription> Revenue </CardDescription>
              <CardTitle>+50%</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChartHero
                data={[
                  { date: "Jan 22", SolarPanels: 0 },
                  { date: "Feb 22", SolarPanels: 160 },
                  { date: "Mar 22", SolarPanels: 1249 },
                  { date: "Apr 22", SolarPanels: 1365 },
                  { date: "May 22", SolarPanels: 3104 },
                  { date: "Jun 22", SolarPanels: 4345 },
                  { date: "Jul 22", SolarPanels: 5608 },
                  { date: "Aug 22", SolarPanels: 6154 },
                  { date: "Sep 22", SolarPanels: 6686 },
                  { date: "Oct 22", SolarPanels: 7166 },
                  { date: "Nov 22", SolarPanels: 7631 },
                  { date: "Dec 22", SolarPanels: 8066 },
                ]}
                categories={["SolarPanels"]}
                colors={["indigo"]}
              />
            </CardContent>
          </Card>
        </div>
      </article>
    </div>
  );
}
