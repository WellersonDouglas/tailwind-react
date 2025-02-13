import { SettingsTabs } from "@/components/Settings";
import * as Input from '@/components/Input';
import {  Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from '@/components/Form/FileInput'
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Form/Textarea";


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">
                Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700">
                Save
            </button>
          </div>
        </div>
        <form id="settings" action="" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200">
          {/** Label de Name */}
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium to-zinc-700"
              >
                Name
            </label>
              <div className="grid gap-6 grid-cols-2">
                <Input.InputRoot>
                  <Input.InputControl id="firstName" defaultValue={"Wellerson"} />
                </Input.InputRoot>

                <Input.InputRoot>
                  <Input.InputControl defaultValue={"Douglas"} />
                </Input.InputRoot>
              </div>
              </div>
            {/** Label de Email */}
            <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium to-zinc-700"
              >
                Email address
            </label>
                <Input.InputRoot>
                  <Input.InputPrefix>
                    <Mail className="w-5 h-5 text-zinc-500" />
                  </Input.InputPrefix>
                  <Input.InputControl id="email"type="email"  defaultValue={"wellersondouglasvr@gmail.com"} />
                </Input.InputRoot>
          </div>
          {/** Label You photo */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
              >
                You photo
                <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                  This will be displayed on your profile.
                </span>
            </label>
                  {/**Chamando todos os files que foram criados em components*/}
                  <FileInput.Root className=" flex items-start gap-5">
                    <FileInput.ImagePreview />
                    <FileInput.Trigger />
                    <FileInput.Control />
                  </FileInput.Root>
          </div>
          {/** Label Role */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium to-zinc-700"
              >
                Role
            </label>
                <Input.InputRoot>
                  <Input.InputControl id="role" defaultValue={"CTO"} />
                </Input.InputRoot>
          </div>
          {/** Label Country */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium to-zinc-700"
              >
                Country
            </label>
               <Select placeholder="Select a country...">
                <SelectItem value="br" text="Brazil" />
                <SelectItem value="us" text="united States" />
               </Select>
          </div>
          {/** Label Timezone */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium to-zinc-700"
              >
                Timezone
            </label>
            <Select placeholder="Select a timezone...">
                <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
                <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
               </Select>
          </div>
           {/** Label Bio */}
           <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700"
              >
                Bio
                <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                  Write a short introduction.
                </span>
            </label>
                <div className="space-y-3">
                  <div className="grid gap-3 grid-cols-2">
                    <Select placeholder="" defaultValue="Normal">
                      <SelectItem value="normal" defaultChecked text="Normal Text" />
                      <SelectItem value="md" text="Markdown" />
                    </Select>

                    <div className="flex items-center gap-1">
                    <button type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                      <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    </button>

                    <button type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                      <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    </button>

                    <button type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                      <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    </button>

                    <button type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                      <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    </button>

                    <button type="button" className="p-2 hover:bg-zinc-50 rounded-md">
                      <ListOrdered className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                    </button>
                    </div>
                  </div>

                  <Textarea id="bio"
                  defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." />
                </div>
          </div>
           {/** Label Portfolio */}
           <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="project"
              className="text-sm font-medium text-zinc-700"
              >
                Portfolio projects
                <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                  Share a few snippets of your work.
                </span>
            </label>
                 {/**Chamando todos os files que foram criados em components*/}
                <FileInput.Root>
                  <FileInput.Trigger />
                  <FileInput.FileList />
                  <FileInput.Control multiple />
                </FileInput.Root>
          </div>
          {/** Botões footer */}
          <div className="flex items-center justify-end gap-2 pt-5">
          <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50">
                Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700">
                Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
