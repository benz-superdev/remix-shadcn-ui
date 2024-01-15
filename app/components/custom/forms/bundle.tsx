import { Outlet, useMatch } from "@remix-run/react";

const FormBundle = () => {
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full my-6"
      />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <a
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 
              ${useMatch("/forms") && "bg-muted"} hover:bg-muted justify-start`}
              href="/forms"
            >
              Profile
            </a>
            <a
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 
              ${
                useMatch("/forms/account") && "bg-muted"
              } hover:bg-muted justify-start`}
              href="/forms/account"
            >
              Account
            </a>
            <a
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 
              ${
                useMatch("/forms/appearance") && "bg-muted"
              } hover:bg-muted justify-start`}
              href="/forms/appearance"
            >
              Appearance
            </a>
            <a
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 
              ${
                useMatch("/forms/notifications") && "bg-muted"
              } hover:bg-muted justify-start`}
              href="/forms/notifications"
            >
              Notifications
            </a>
            <a
              className={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 
             ${
               useMatch("/forms/display") && "bg-muted"
             } hover:bg-muted justify-start`}
              href="/forms/display"
            >
              Display
            </a>
          </nav>
        </aside>

        <Outlet />
      </div>
    </div>
  );
};

export default FormBundle;
