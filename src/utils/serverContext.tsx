import { AsyncLocalStorage } from "async_hooks";
import { JSX } from "react";

export const createServerContext = <
  T = unknown,
  ComponentProps extends T = T
>() => {
  const pageContextStorage = new AsyncLocalStorage<T>();

  const set = (ctx: T) => {
    pageContextStorage.enterWith(ctx);
  };

  const get = async () => {
    const ctx = pageContextStorage.getStore();
    return ctx;
  };

  const getOrThrow = () => {
    const ctx = get();
    if (!ctx) {
      throw new Error(`ServerContext not found.`);
    }
    return ctx;
  };

  const Wrapper = (
    Component: (props: ComponentProps) => Promise<JSX.Element>
  ) => {
    const WrapperPage = async (props: ComponentProps) => {
      set(props)
      const resolvedProps = await props
      return <Component {...resolvedProps} />
    };
    return WrapperPage;
  };

  return {
    set,
    get,
    getOrThrow,
    Wrapper,
  };
};

export const pageContext = createServerContext<{
  params: Record<string, string | string[]>;
  searchParams: Record<string, string | string[]>;
}>();
