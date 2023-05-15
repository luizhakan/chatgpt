import IconClose from "./icons/IconClose";

type Props = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: Props) => {
  return (
    <section className="fixed left-0 top-0 bottom-0 text-white">
      <div className="transition-all duration-200 flex h-screen">
        <div className="">{children}</div>

        <div className="">
          <IconClose width={24} height={24} />
        </div>
      </div>
    </section>
  );
};
