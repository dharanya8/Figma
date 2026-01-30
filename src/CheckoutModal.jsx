import ModalWrapper from "./ModalWrapper";
import StepConfirmItems from "./StepConfirmItems";
import StepComplimentary from "./StepComplimentary";
import StepOrderSummary from "./StepOrderSummary";
import { useEffect } from "react";

export default function CheckoutModal({ open, step, setStep, cart, setCart }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <ModalWrapper onClose={() => setStep(null)}>
      {step === "CONFIRM" && (
        <StepConfirmItems
          cart={cart}
          setCart={setCart}
          onNext={() => setStep("COMPLIMENTARY")}
          onClose={() => setStep(null)}
        />
      )}

      {step === "COMPLIMENTARY" && (
        <StepComplimentary
          cart={cart}
          onBack={() => setStep("CONFIRM")}
          onNext={(selectedFreeItems) => {
            console.log("FREE ITEMS:", selectedFreeItems);
            setStep("ORDER");
          }}
        />
      )}

      {step === "ORDER" && (
        <StepOrderSummary cart={cart} onBack={() => setStep("COMPLIMENTARY")} />
      )}
    </ModalWrapper>
  );
}
