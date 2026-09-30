import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function useNotes(search) {
  const term = search.trim();
  return useQuery({
    queryKey: ["notes", term],
    queryFn: async () => {
      const query = term
        ? { $or: [{ title: { $regex: escape(term), $options: "i" } }, { content: { $regex: escape(term), $options: "i" } }] }
        : {};
      const page = await base44.entities.Note.filter(query, { sort: "-created_date", limit: 50 });
      return page.items;
    },
    placeholderData: (prev) => prev,
  });
}

export function useCreateNote() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) => base44.entities.Note.create(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notes"] }),
  });
}