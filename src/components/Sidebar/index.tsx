import {BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, Search, SquareStack, Users} from "lucide-react"
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { InputControl, InputPrefix, InputRoot } from "../Input";


export function Sidebar(){
	return <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
	<Logo />
{/** Chamando os inputs */}
	<InputRoot>
		<InputPrefix>
			<Search className="w-5 h-5 text-zinc-500" />
		</InputPrefix>
			<InputControl placeholder="Search"/>
	</InputRoot>
	{/** Estilização do Menu */}
	<nav className="space-y-0.5">
			<NavItem title="Home" icon={Home} />
			<NavItem title="Dashboard" icon={BarChart} />
			<NavItem title="Projects" icon={SquareStack} />
			<NavItem title="Tasks" icon={CheckSquare} />
			<NavItem title="Reporting" icon={Flag} />
			<NavItem title="Users" icon={Users} />
		</nav>
	{/** Estilização do Menu de baixo */}
	<div className="mt-auto flex flex-col gap-6">
		<nav className="space-y-0.5">
		<NavItem title="Support" icon={LifeBuoy} />
		<NavItem title="Setting" icon={Cog} />
		</nav>
		{/**Chamando via components UsedSpaceWidget */}
		<UsedSpaceWidget />
		{/**Criando a linha de divisão */}
		<div className="h-px bg-zinc-200"/>
		{/**Chamando via components a Profile */}
		<Profile />
	</div>
</aside>
}