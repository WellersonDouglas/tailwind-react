import { LogOut } from "lucide-react";

export function Profile() {
	return(
		<div className="grid grid-cols-profile items-center gap-3">
			<img src="https://github.com/WellersonDouglas.png" className="w-10 h-10 rounded-full" alt="" />
			<div className="flex flex-col truncate">
				<span className="text-sm font-semibold text-zinc-700">Wellerson Douglas</span>
				<span className="text-sm text-zinc-500 truncate">wellersondouglasvr@gmail.com</span>
			</div>
			<button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
				<LogOut className="w-5 h-5 text-zinc-500" />
			</button>
		</div>
	)
}