"use client";
import { useActionState } from "react";
import { createSkill } from "@/actions/skills";

const initialState = {
    message: " ",
}

export default function NewSkillPage() {
    const [state, formAction, pending] = useActionState(createSkill, initialState);

    return (
        <form action={formAction} className="p-4 max-w-md mx-auto flex form flex-col gap-4">
            <input placeholder="Skill Name" name="name" className="input input-bordered w-full" />
            <textarea placeholder="Skill Description" name="description" rows={3} className="textarea textarea-bordered w-full"></textarea>
            <input placeholder="Skill Category" name="category" className="input input-bordered w-full" />

            <p aria-live="polite" className="text-red-500">{state?.message}</p>

            <button className="btn btn-primary" disabled={pending}>
                {pending ? "Creating..." : "Create Skill"}
            </button>
        </form>
    );
}