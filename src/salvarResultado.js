import supabase from "../supabase";

export const salvarResultado = async (tipo, acertos, total) => {
  const { error } = await supabase.from("historico").insert([
    {
      usuario: "anonimo",
      tipo,
      acertos,
      total,
      data: new Date()
    }
  ]);

  if (error) {
    console.error("Erro ao salvar:", error);
  } else {
    console.log("Salvo!");
  }
};