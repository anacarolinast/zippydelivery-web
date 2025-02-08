import { useEffect, useState } from 'react';
import { ref, onChildAdded } from 'firebase/database';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import useCompany from '../hooks/UseCompany';
import 'react-toastify/dist/ReactToastify.css';
import zippySound from '../assets/sound/zippy.mp3';

const useNewPedidoNotification = () => {
  const [notificados, setNotificados] = useState(new Set());
  const [cutoffTime, setCutoffTime] = useState(Date.now());
  const empresaId = useCompany(); 

  const playNotificationSound = () => {
    const audio = new Audio(zippySound);
    audio.play(); 
    audio.onerror = () => {
      console.error("Erro ao tentar reproduzir o som");
    };
  };

  useEffect(() => {
    if (!empresaId) return; 

    console.log(`⏳ Escutando novos pedidos para a empresa: ${empresaId}`);

    const pedidosRef = ref(db, 'pedidos');

    const unsubscribe = onChildAdded(pedidosRef, (snapshot) => {
      const novoPedido = snapshot.val();
      if (!novoPedido || !novoPedido.dataHora || Number(novoPedido.empresa?.id) !== Number(empresaId)) return;

      const pedidoTime = new Date(novoPedido.dataHora).getTime();

      console.log(`📌 PedidoTime: ${pedidoTime}, CutoffTime: ${cutoffTime}`);

      if (pedidoTime >= cutoffTime && !notificados.has(novoPedido.id)) {
        console.log("🔔 Novo pedido recebido:", novoPedido);

        setNotificados((prev) => {
          const updated = new Set(prev);
          updated.add(novoPedido.id);
          return updated;
        });

        toast.info(`Novo pedido recebido!`, {
          position: "top-right",
          autoClose: 9000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        playNotificationSound();
      } else {
        console.log("⏳ Pedido ignorado (antigo, de outra empresa ou já notificado).");
      }
    });

    return () => unsubscribe();

  }, [cutoffTime, empresaId]);

};

export default useNewPedidoNotification;
