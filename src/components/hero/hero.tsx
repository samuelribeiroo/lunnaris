import React from "react";
import { Wrapper, Container, Icons, Footer } from "@/components";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import { ArrowRight, ChevronRight, User, Zap } from "lucide-react";
import SectionBadge from "../ui/section-badge";
import { features, perks, pricingCards, reviews } from "@/constants";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
import { LampContainer } from "../ui/lamp";
import { Input } from "../ui/input";

export default function HeroSection() {
	const firstRow = reviews.slice(0, reviews.length / 2);

	const secondRow = reviews.slice(0, reviews.length / 2);

	return (
		<section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 py-8">
			<Wrapper>
				<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />{" "}
				<div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />
				<Container>
					<div className="flex flex-col items-center justify-center w-full">
						<button
							type="button"
							className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200"
						>
							<span>
								<span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
							</span>
							<span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
							<span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40" />
							<span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
								<Image
									src="/icons/sparkles-dark.svg"
									alt="✨"
									width={24}
									height={24}
									className="w-4 h-4"
								/>
								Conheça Lunnaris AI
								<ChevronRight className="w-4 h-4" />
							</span>
						</button>

						<div className="flex flex-col items-center mt-8 max-w-3xl mx-auto w-11/12 md:w-full">
							<h1 className="text-4xl md:text-6xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to gray-100 text-transparent">
								Impulsione seus projetos!
							</h1>
							<p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
								Sem escrever uma linha de código, entregue sites profissionais
								com rapidez e máxima performance, além de SEO otimizado.
							</p>

							<div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
								<Link
									href="/"
									className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 md:gap-8 shadow-2xl shadow-foreground/40 cursor-pointer select-none"
								>
									<p className="text-foreground text-sm text-center md:text-base font-medium  pl-4 pr-4 lg:marker:pr-0">
										🚀 {"   "} Construa seu website agora!
									</p>
									<Button
										size="sm"
										className="rounded-full hidden lg:flex border border-foreground/20"
									>
										Inicie agora
										<ArrowRight className="w-4 h-4 ml-1 transition-transform transform-gpu hover:translate-x-1" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative flex items-center py-10 md:py-20 w-full container mx-auto">
							{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
							<div className="absolute top-1/2 left-1/2 -z10 gradient  w-3/4 -translate-x-1/2 -translate-y-1/2 h-3/4 inset-0 blur-[10rem]"></div>
							<div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
								<Image
									src="/assets/dashboard.svg"
									width={1200}
									height={1200}
									className="rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
									alt="Dashborard Image"
									fetchPriority="high"
								/>
								<BorderBeam size={250} duration={12} delay={9} />
							</div>
						</div>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<div className="max-w-md mx-auto text-start md:text-center">
						<SectionBadge title="SAIBA MAIS" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
							Lorem Ipsum is simply dummy
						</h2>
						<p className="text-muted-foreground mt-6">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry&apos;s standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
					</div>
				</Container>
				<Container>
					<div className="flex flex-col items-center justufy-center py-10 md:py-20 w-full">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first: border-gray-900">
							{perks.map((perk) => (
								<div
									key={perk.title}
									className="flex flex-col items-start px-4 py-4 md:px-6 lg:py-6 lg:px-8"
								>
									<div className="flex items-center justify-center">
										<perk.icon className="w-8 h-8" />
									</div>
									<h3 className="text-lg font-medium mt-4">{perk.title}</h3>
									<p className="text-muted-foreground mt-2 text-start">
										{perk.info}
									</p>
								</div>
							))}
						</div>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<div className="max-w-md md:mx-auto text-start md:text-center">
						<SectionBadge title="Ferramentas" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
							Descubra nossas poderosas ferramentas
						</h2>
						<p className="text-muted-foreground mt-6">
							Lunnaris AI fornece diversas ferramentas que promovem a
							produtividade e performance na construção de websites.
						</p>
					</div>
				</Container>
				<Container>
					<div className="flex items-center justify-center mx-auto mt-8">
						<Icons.feature className="w-auto h-80" />
					</div>
				</Container>
				<Container>
					<div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
							{features.map((feature) => (
								<div
									key={feature.title}
									className="flex flex-col items-start px-0"
								>
									<div className="flex items-center justify-center">
										<feature.icon className="w-8 h-8" />
									</div>
									<h3 className="text-lg font-medium mt-4">{feature.title}</h3>
									<p className="text-muted-foreground mt-2 text-start">
										{feature.info}
									</p>
								</div>
							))}
						</div>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<div className="max-w-md mx-auto text-start md:text-center">
						<SectionBadge title="Preços" />
						<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
							Unlock the right plan for your business
						</h2>
						<p className="text-muted-foreground mt-6">
							Choose your best plan for your business and start build right now
						</p>
					</div>
				</Container>
				<Container className="flex items-center justify-center">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl">
						{pricingCards.map((card) => (
							<div className="" key={card.title}>
								<Card
									key={card.title}
									className={cn(
										"flex flex-col w-full border-neutral-700",
										card.title === "Unlimited SaaS" &&
											"border-2 border-primary",
									)}
								>
									<CardHeader className="border-2 border-border">
										<span>{card.title}</span>
										<CardTitle
											className={cn(
												card.title !== "Unlimited SaaS" &&
													"text-muted-foreground",
											)}
										>
											{card.price}
										</CardTitle>
										<CardDescription>{card.description}</CardDescription>
									</CardHeader>
									<CardContent className="pt-6 space-y-3">
										{card.features.map((feature) => (
											<div className="flex items-center gap-2" key={card.title}>
												<Zap className="w-4 h-4 fill-primary text-primary" />
												<p className="">{feature}</p>
											</div>
										))}
									</CardContent>
									<CardFooter className="mx-auto">
										<Link
											href="#"
											className={cn(
												"w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",
												card.title !== "Unlimited Saas" &&
													"!bg-foreground !text-background",
											)}
										>
											{card.buttonText}
										</Link>
									</CardFooter>
								</Card>
							</div>
						))}
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container className="max-w-md mx-auto text-start md:text-center">
					<SectionBadge title="Nossos clientes" />
					<h2 className="text-3xl lg:text-4xl font-semibold mt-6">
						What people are saying
					</h2>
					<p className="text-muted-foreground mt-6">
						See how lunnaris AI empowers people
					</p>
				</Container>
				<Container>
					<div className="py-10 md:py-20 w-full">
						<div className="flex flex-col items-center justify-center overflow-hidden py-10 h-full w-full relative ">
							<Marquee pauseOnHover className="[--duration:20s] select-none">
								{firstRow.map((review) => (
									<figure
										key={review.name}
										className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
									>
										<div className="flex flex-row items-center gap-2">
											<User className="w-6 h-6" />
											<div className="flex flex-col">
												<figcaption className="text-sm font-medium">
													{review.name}
												</figcaption>
												<p className="text-xs font-medium text-muted-foreground">
													{review.username}
												</p>
											</div>
										</div>
										<blockquote className="mt-2 text-sm">
											{review.body}
										</blockquote>
									</figure>
								))}
							</Marquee>

							<Marquee reverse pauseOnHover className="[--duration:20s] select-none">
								{secondRow.map((review) => (
									<figure
										key={review.name}
										className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-zinc-50/[.1] bg-background hover:bg-zinc-50/[.15]"
									>
										<div className="flex flex-row items-center gap-2">
											<User className="w-6 h-6" />
											<div className="flex flex-col">
												<figcaption className="text-sm font-medium">
													{review.name}
												</figcaption>
												<p className="text-xs font-medium text-muted-foreground">
													{review.username}
												</p>
											</div>
										</div>
										<blockquote className="mt-2 text-sm">
											{review.body}
										</blockquote>
									</figure>
								))}
							</Marquee>
							<div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
							<div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />

						</div>
					</div>
				</Container>
			</Wrapper>

			<Wrapper className="flex flex-col items-center justify-center py-12 relative">
				<Container>
					<LampContainer>
						<div className="flex flex-col items-center justify-center relative w-full text-center">
							<h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
								Da concepção até o lançamento <br/> Mais rápido que outros!
							</h2>
							<p className="text-muted-foreground mt-6 max-w-md mx-auto">Crie sites impressionantes com Lunnaris AI</p>
							<Button variant='white' className="mt-6">
								<Link href='/sign-in'>Comece gratuitamente!</Link>
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						</div>
					</LampContainer>
				</Container>
				<Container className="relative z-[999999]">
					<div className="flex items-center justify-center w-full -mt-40">
						<div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 md:py-8">
							<div className="flex flex-col items-start gap-4 w-full">
								<h4 className="text-xl md:text-2xl font-semibold">Entre agora na nossa newsletter</h4>
								<p className="text-base text-muted-foreground">Fique por dentro de tudo</p>
							</div>
							<div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
								<form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
									<Input 
									required
									type="email"
									placeholder="Enter your email"
									className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
									/>
									<Button type="submit" size='sm' variant='secondary' className="w-full md:w-max">Inscreva-se</Button>
								</form>
								<p className="text-xs text-muted-foreground">
								<Link href='#'>Política de privacidade</Link>
								</p>
							</div>
						</div>
					</div>
					<Footer/>
				</Container>
			</Wrapper>
		</section>
	);
}