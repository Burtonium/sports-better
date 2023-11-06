
import { type FC, useCallback } from "react";
import type { Event } from "@prisma/client";
import Input from "./forms/Input";

type Props = {
  event?: Event,
  onDismiss?: () => void
}

const NOOP = () => { /* noop */ };

const BetModal: FC<Props> = ({ event, onDismiss = NOOP }) => {
  const onSubmit = useCallback(() => {
    alert('Bet submitted');
    onDismiss();
  }, [onDismiss]);

  return event && (
    <div tabIndex={-1} className="backdrop-brightness-50 flex justify-center items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative w-full max-w-2xl max-h-full">
        <form onSubmit={onSubmit} className="relative bg-gray-800 rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold">
              Bet on {event.eventName}
            </h3>
            <button onClick={onDismiss} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <Input label="Amount" type="number" />
          </div>
          <div className="flex justify-center items-center p-6 space-x-10 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button className="btn" onClick={onDismiss}>Cancel</button>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BetModal;
