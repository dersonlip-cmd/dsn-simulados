import { useEffect, useState } from "react";
import supabase from "../supabase";

export default function Historico({ voltar }) {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    buscarHistorico();
  }, []);

  async function buscarHistorico() {
    const { data, error } = await supabase
      .from("historico")
      .select("*")
      .order("data", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setDados(data);
    }
  }

  return (
    <div style={styles.container}>
      <h2>📊 Histórico de Provas</h2>

      {dados.length === 0 && <p>Nenhum resultado ainda</p>}

      {dados.map((item, i) => {
        const porcentagem = Math.round(
          (item.acertos / item.total) * 100
        );

        return (
          <div key={i} style={styles.card}>
            <h3>{item.tipo}</h3>

            <p>Acertos: {item.acertos}/{item.total}</p>
            <p>{porcentagem}%</p>

            <small>
              {new Date(item.data).toLocaleString()}
            </small>
          </div>
        );
      })}

      <button onClick={voltar} style={styles.button}>
        Voltar ao Menu
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 400,
    margin: "auto",
    textAlign: "center",
  },

  card: {
    background: "#1e293b",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  button: {
    marginTop: 20,
    padding: 10,
    width: "100%",
    cursor: "pointer",
  },
};