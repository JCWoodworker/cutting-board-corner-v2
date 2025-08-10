import "./App.css"
import "@radix-ui/themes/styles.css"
import { Button } from "@/components/ui/button"
import { Theme } from "@radix-ui/themes"

function App() {
	return (
		<Theme>
			<main className="min-h-screen flex flex-col">
				<header className="container-padded py-6 flex items-center justify-between">
					<a href="#" className="flex items-center gap-3">
						<div className="h-9 w-9 rounded-md bg-brand-600/90 shadow-sm ring-1 ring-brand-800/40 flex items-center justify-center">
							<span className="text-surface-50 font-semibold">CB</span>
						</div>
						<span className="font-display text-xl tracking-tight text-brand-800">
							Cutting Board Corner
						</span>
					</a>
					<nav className="hidden md:flex items-center gap-6 text-sm">
						<a
							className="text-neutral-600 hover:text-brand-700"
							href="#features"
						>
							Features
						</a>
						<a
							className="text-neutral-600 hover:text-brand-700"
							href="#community"
						>
							Community
						</a>
						<a
							className="text-neutral-600 hover:text-brand-700"
							href="#marketplace"
						>
							Marketplace
						</a>
					</nav>
					<div className="flex items-center gap-3">
						<Button variant="secondary" size="md">
							Sign in
						</Button>
					</div>
				</header>

				<section className="relative overflow-hidden">
					<div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-100 to-surface-50" />
					<div className="container-padded py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h1 className="font-display text-4xl md:text-6xl text-brand-800 leading-tight">
								A home for cutting boards, woodcraft, and the people who love
								them
							</h1>
							<p className="mt-5 text-neutral-700 text-lg leading-relaxed">
								Catalog beloved boards, track care, discover makers, and share
								recipes. We’re crafting a curated hub for enthusiasts and
								artisans—currently in active development.
							</p>
							<div className="mt-8 flex flex-col sm:flex-row gap-3">
								<Button asChild size="lg">
									<a href="#notify">Get launch updates</a>
								</Button>
								<Button variant="outline" size="lg" asChild>
									<a href="#learn">Learn more</a>
								</Button>
							</div>
							<div className="mt-8 flex items-center gap-4 text-sm text-neutral-600">
								<span className="inline-flex items-center gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-forest-500" />{" "}
									Maker-friendly
								</span>
								<span className="inline-flex items-center gap-2">
									<span className="h-2.5 w-2.5 rounded-full bg-accent-500" />{" "}
									Culinary-inspired
								</span>
							</div>
						</div>
						<div className="relative">
							<div className="relative rounded-2xl overflow-hidden ring-1 ring-neutral-200 shadow-2xl">
								<img
									src="/hero-cutting-board.svg"
									alt="Beautiful wooden cutting boards with fresh herbs"
									className="w-full h-auto object-cover"
								/>
								<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
									<p className="text-surface-50 text-sm">
										Handcrafted boards. Honest materials. Shared craft.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="container-padded py-16 md:py-24">
					<div className="grid md:grid-cols-3 gap-8">
						<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
							<div className="h-10 w-10 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center font-semibold">
								1
							</div>
							<h3 className="mt-4 font-display text-xl text-brand-800">
								Comprehensive Board Profiles
							</h3>
							<p className="mt-2 text-neutral-700 text-sm">
								Document wood species, construction, origin stories, and
								galleries—so every board has a place.
							</p>
						</div>
						<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
							<div className="h-10 w-10 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center font-semibold">
								2
							</div>
							<h3 className="mt-4 font-display text-xl text-brand-800">
								Maintenance Logging
							</h3>
							<p className="mt-2 text-neutral-700 text-sm">
								Track oiling, waxing, and upkeep—stay on top of care and
								longevity.
							</p>
						</div>
						<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
							<div className="h-10 w-10 rounded-md bg-brand-100 text-brand-800 flex items-center justify-center font-semibold">
								3
							</div>
							<h3 className="mt-4 font-display text-xl text-brand-800">
								Community & Marketplace
							</h3>
							<p className="mt-2 text-neutral-700 text-sm">
								Join discussions, share recipes, and discover makers, suppliers,
								and care products.
							</p>
						</div>
					</div>
				</section>

				<footer className="mt-auto border-t border-neutral-200">
					<div className="container-padded py-10 flex flex-col md:flex-row items-center justify-between gap-6">
						<p className="text-sm text-neutral-600">
							© {new Date().getFullYear()} Cutting Board Corner
						</p>
						<div className="flex items-center gap-4 text-sm">
							<a
								href="#privacy"
								className="text-neutral-600 hover:text-brand-700"
							>
								Privacy
							</a>
							<a
								href="#terms"
								className="text-neutral-600 hover:text-brand-700"
							>
								Terms
							</a>
							<a
								href="#contact"
								className="text-neutral-600 hover:text-brand-700"
							>
								Contact
							</a>
						</div>
					</div>
				</footer>
			</main>
		</Theme>
	)
}

export default App
