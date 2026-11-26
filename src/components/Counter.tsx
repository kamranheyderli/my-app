import { decrement, increment } from "../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
      <p className="text-5xl font-bold tabular-nums">{count}</p>
      <div className="mt-6 flex justify-center gap-3">
        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          type="button"
          className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>
    </div>
  );
}
