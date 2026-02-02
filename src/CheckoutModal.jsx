import ModalWrapper from "./ModalWrapper";
import StepConfirmItems from "./StepConfirmItems";
import StepComplimentary from "./StepComplimentary";
import StepOrderSummary from "./StepOrderSummary";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CheckoutModal({ open, step, setStep, onOrderNow }) {
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
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
          onNext={() => setStep("COMPLIMENTARY")}
          onClose={() => setStep(null)}
        />
      )}

      {step === "COMPLIMENTARY" && (
        <StepComplimentary
          cart={cart}
          onBack={() => setStep("CONFIRM")}
          onNext={() => setStep("ORDER")}
        />
      )}

      {step === "ORDER" && (
        <StepOrderSummary
          cart={cart}
          onBack={() => setStep("COMPLIMENTARY")}
          onOrderNow={onOrderNow}
        />
      )}
    </ModalWrapper>
  );
}
