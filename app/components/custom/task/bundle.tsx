"use client";

import { Avatar } from "@radix-ui/react-avatar";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowDownIcon,
  ArrowRight,
  ArrowUp,
  ArrowUpCircle,
  ArrowUpIcon,
  CheckCircle2,
  ChevronsUpDown,
  Circle,
  EyeOff,
  HelpCircle,
  MoreHorizontal,
  SlidersHorizontal,
  XCircle,
} from "lucide-react";
import * as React from "react";
import { AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const data: Task[] = [
  {
    task: "TASK-8782",
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    task: "TASK-7878",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-5562",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-8686",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    task: "TASK-1280",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-7262",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-1138",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    task: "TASK-7184",
    title: "We need to program the back-end THX pixel!",
    status: "Todo",
    priority: "Low",
  },
  {
    task: "TASK-5160",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: "In Progress",
    priority: "High",
  },
  {
    task: "TASK-5618",
    title:
      "Generating the driver won't do anything, we need to index the online SSL application!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-6699",
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-2858",
    title: "We need to override the online UDP bus!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-9864",
    title:
      "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-8404",
    title: "We need to generate the virtual HEX alarm!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-5365",
    title:
      "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-1780",
    title:
      "The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-6938",
    title:
      "Use the redundant SCSI application, then you can hack the optical alarm!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-9885",
    title: "We need to compress the auxiliary VGA driver!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-3216",
    title:
      "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-9285",
    title:
      "The IP monitor is down, copy the haptic alarm so we can generate the HTTP transmitter!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-1024",
    title:
      "Overriding the microchip won't do anything, we need to transmit the digital OCR transmitter!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-7068",
    title:
      "You can't generate the capacitor without indexing the wireless HEX pixel!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-6502",
    title:
      "Navigating the microchip won't do anything, we need to bypass the back-end SQL bus!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-5326",
    title: "We need to hack the redundant UTF8 transmitter!",
    status: "Todo",
    priority: "Low",
  },
  {
    task: "TASK-6274",
    title:
      "Use the virtual PCI circuit, then you can parse the bluetooth alarm!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-1571",
    title:
      "I'll input the neural DRAM circuit, that should protocol the SMTP interface!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    task: "TASK-9518",
    title:
      "Compressing the interface won't do anything, we need to compress the online SDD matrix!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    task: "TASK-5581",
    title:
      "I'll synthesize the digital COM pixel, that should transmitter the UTF8 protocol!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-2197",
    title:
      "Parsing the feed won't do anything, we need to copy the bluetooth DRAM bus!",
    status: "Todo",
    priority: "Low",
  },
  {
    task: "TASK-8484",
    title: "We need to parse the solid state UDP firewall!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-9892",
    title:
      "If we back up the application, we can get to the UDP application through the multi-byte THX capacitor!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-9616",
    title: "We need to synthesize the cross-platform ASCII pixel!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    task: "TASK-9744",
    title:
      "Use the back-end IP card, then you can input the solid state hard drive!",
    status: "Done",
    priority: "Low",
  },
  {
    task: "TASK-1376",
    title:
      "Generating the alarm won't do anything, we need to generate the mobile IP capacitor!",
    status: "Backlog",
    priority: "Low",
  },
  {
    task: "TASK-7382",
    title:
      "If we back up the firewall, we can get to the RAM alarm through the primary UTF8 pixel!",
    status: "Todo",
    priority: "Low",
  },
  {
    task: "TASK-2290",
    title:
      "I'll compress the virtual JSON panel, that should application the UTF8 bus!",
    status: "Canceled",
    priority: "High",
  },
  {
    task: "TASK-1533",
    title:
      "You can't input the firewall without overriding the wireless TCP firewall!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-4920",
    title:
      "Bypassing the hard drive won't do anything, we need to input the bluetooth JSON program!",
    status: "In Progress",
    priority: "High",
  },
  {
    task: "TASK-5168",
    title:
      "If we synthesize the bus, we can get to the IP panel through the virtual TLS array!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-7103",
    title: "We need to parse the multi-byte EXE bandwidth!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-4314",
    title:
      "If we compress the program, we can get to the XML alarm through the multi-byte COM matrix!",
    status: "In Progress",
    priority: "High",
  },
  {
    task: "TASK-3415",
    title:
      "Use the cross-platform XML application, then you can quantify the solid state feed!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-8339",
    title:
      "Try to calculate the DNS interface, maybe it will input the bluetooth capacitor!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-6995",
    title:
      "Try to hack the XSS bandwidth, maybe it will override the bluetooth matrix!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-8053",
    title:
      "If we connect the program, we can get to the UTF8 matrix through the digital UDP protocol!",
    status: "Todo",
    priority: "Medium",
  },
  {
    task: "TASK-4336",
    title:
      "If we synthesize the microchip, we can get to the SAS sensor through the optical UDP program!",
    status: "Todo",
    priority: "Low",
  },
  {
    task: "TASK-8790",
    title:
      "I'll back up the optical COM alarm, that should alarm the RSS capacitor!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-8980",
    title:
      "Try to navigate the SQL transmitter, maybe it will back up the virtual firewall!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-7342",
    title: "Use the neural CLI card, then you can parse the online port!",
    status: "Backlog",
    priority: "Low",
  },
  {
    task: "TASK-5608",
    title:
      "I'll hack the haptic SSL program, that should bus the UDP transmitter!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-1606",
    title:
      "I'll generate the bluetooth PNG firewall, that should pixel the SSL driver!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-7872",
    title:
      "Transmitting the circuit won't do anything, we need to reboot the 1080p RSS monitor!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    task: "TASK-4167",
    title:
      "Use the cross-platform SMS circuit, then you can synthesize the optical feed!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    task: "TASK-9581",
    title:
      "You can't index the port without hacking the cross-platform XSS monitor!",
    status: "Backlog",
    priority: "Low",
  },
  {
    task: "TASK-8806",
    title: "We need to bypass the back-end SSL panel!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-6542",
    title:
      "Try to quantify the RSS firewall, maybe it will quantify the open-source system!",
    status: "Done",
    priority: "Low",
  },
  {
    task: "TASK-6806",
    title:
      "The VGA protocol is down, reboot the back-end matrix so we can parse the CSS panel!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-9549",
    title: "You can't bypass the bus without connecting the neural JBOD bus!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-1075",
    title:
      "Backing up the driver won't do anything, we need to parse the redundant RAM pixel!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-1427",
    title:
      "Use the auxiliary PCI circuit, then you can calculate the cross-platform interface!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-1907",
    title:
      "Hacking the circuit won't do anything, we need to back up the online DRAM system!",
    status: "Todo",
    priority: "High",
  },
  {
    task: "TASK-4309",
    title:
      "If we generate the system, we can get to the TCP sensor through the optical GB pixel!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-3973",
    title:
      "I'll parse the back-end ADP array, that should bandwidth the RSS bandwidth!",
    status: "Todo",
    priority: "Medium",
  },
  {
    task: "TASK-7962",
    title:
      "Use the wireless RAM program, then you can hack the cross-platform feed!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-3360",
    title:
      "You can't quantify the program without synthesizing the neural OCR interface!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-9887",
    title:
      "Use the auxiliary ASCII sensor, then you can connect the solid state port!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    task: "TASK-3649",
    title:
      "I'll input the virtual USB system, that should circuit the DNS monitor!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    task: "TASK-3586",
    title:
      "If we quantify the circuit, we can get to the CLI feed through the mobile SMS hard drive!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-5150",
    title:
      "I'll hack the wireless XSS port, that should transmitter the IP interface!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    task: "TASK-3652",
    title:
      "The SQL interface is down, override the optical bus so we can program the ASCII interface!",
    status: "Backlog",
    priority: "Low",
  },
  {
    task: "TASK-6884",
    title:
      "Use the digital PCI circuit, then you can synthesize the multi-byte microchip!",
    status: "Canceled",
    priority: "High",
  },
  {
    task: "TASK-1591",
    title: "We need to connect the mobile XSS driver!",
    status: "In Progress",
    priority: "High",
  },
  {
    task: "TASK-3802",
    title:
      "Try to override the ASCII protocol, maybe it will parse the virtual matrix!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-7253",
    title:
      "Programming the capacitor won't do anything, we need to bypass the neural IB hard drive!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-9739",
    title: "We need to hack the multi-byte HDD bus!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-4424",
    title:
      "Try to hack the HEX alarm, maybe it will connect the optical pixel!",
    status: "In Progress",
    priority: "Medium",
  },
  {
    task: "TASK-3922",
    title:
      "You can't back up the capacitor without generating the wireless PCI program!",
    status: "Backlog",
    priority: "Low",
  },
  {
    task: "TASK-4921",
    title:
      "I'll index the open-source IP feed, that should system the GB application!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-5814",
    title: "We need to calculate the 1080p AGP feed!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-2645",
    title:
      "Synthesizing the system won't do anything, we need to navigate the multi-byte HDD firewall!",
    status: "Todo",
    priority: "Medium",
  },
  {
    task: "TASK-4535",
    title:
      "Try to copy the JSON circuit, maybe it will connect the wireless feed!",
    status: "In Progress",
    priority: "Low",
  },
  {
    task: "TASK-4463",
    title: "We need to copy the solid state AGP monitor!",
    status: "Done",
    priority: "Low",
  },
  {
    task: "TASK-9745",
    title:
      "If we connect the protocol, we can get to the GB system through the bluetooth PCI microchip!",
    status: "Canceled",
    priority: "High",
  },
  {
    task: "TASK-2080",
    title:
      "If we input the bus, we can get to the RAM matrix through the auxiliary RAM card!",
    status: "Todo",
    priority: "Medium",
  },
  {
    task: "TASK-3838",
    title:
      "I'll bypass the online TCP application, that should panel the AGP system!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-1340",
    title: "We need to navigate the virtual PNG circuit!",
    status: "Todo",
    priority: "Medium",
  },
  {
    task: "TASK-6665",
    title:
      "If we parse the monitor, we can get to the SSD hard drive through the cross-platform AGP alarm!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-7585",
    title:
      "If we calculate the hard drive, we can get to the SSL program through the multi-byte CSS microchip!",
    status: "Backlog",
    priority: "Low",
  },
  {
    task: "TASK-6319",
    title: "We need to copy the multi-byte SCSI program!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-4369",
    title: "Try to input the SCSI bus, maybe it will generate the 1080p pixel!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-9035",
    title: "We need to override the solid state PNG array!",
    status: "Canceled",
    priority: "Low",
  },
  {
    task: "TASK-3970",
    title:
      "You can't index the transmitter without quantifying the haptic ASCII card!",
    status: "Todo",
    priority: "Medium",
  },
  {
    task: "TASK-4473",
    title:
      "You can't bypass the protocol without overriding the neural RSS program!",
    status: "Todo",
    priority: "Low",
  },
  {
    task: "TASK-4136",
    title:
      "You can't hack the hard drive without hacking the primary JSON program!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    task: "TASK-3939",
    title:
      "Use the back-end SQL firewall, then you can connect the neural hard drive!",
    status: "Done",
    priority: "Low",
  },
  {
    task: "TASK-2007",
    title:
      "I'll input the back-end USB protocol, that should bandwidth the PCI system!",
    status: "Backlog",
    priority: "High",
  },
  {
    task: "TASK-7516",
    title:
      "Use the primary SQL program, then you can generate the auxiliary transmitter!",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-6906",
    title:
      "Try to back up the DRAM system, maybe it will reboot the online transmitter!",
    status: "Done",
    priority: "High",
  },
  {
    task: "TASK-5207",
    title:
      "The SMS interface is down, copy the bluetooth bus so we can quantify the VGA card!",
    status: "In Progress",
    priority: "Low",
  },
];

export type Task = {
  task: string;
  title: string;
  status: "In Progress" | "Todo" | "Backlog" | "Canceled" | "Done";
  priority: "High" | "Medium" | "Low";
};

const renderHeader = (title: string, column: Column<Task, unknown>) => {
  return (
    <div className={`flex items-center space-x-2`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>

            {column.getIsSorted() === "desc" && (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}
            {column.getIsSorted() === "asc" && (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            )}
            {!column.getIsSorted() && (
              <ChevronsUpDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "task",
    maxSize: 10,
    header: "Task",
    cell: ({ row }) => <div>{row.getValue("task")}</div>,
  },
  {
    accessorKey: "title",
    maxSize: 40,
    header: ({ column }) => {
      return renderHeader("Title", column);
    },
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    maxSize: 20,
    header: ({ column }) => renderHeader("Status", column),
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        {row.getValue("status") === "Backlog" && (
          <HelpCircle className="h-4 w-4" />
        )}
        {row.getValue("status") === "Todo" && <Circle className="h-4 w-4" />}
        {row.getValue("status") === "In Progress" && (
          <ArrowUpCircle className="h-4 w-4" />
        )}
        {row.getValue("status") === "Done" && (
          <CheckCircle2 className="h-4 w-4" />
        )}
        {row.getValue("status") === "Canceled" && (
          <XCircle className="h-4 w-4" />
        )}

        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "priority",
    maxSize: 20,
    header: ({ column }) => renderHeader("Priority", column),
    cell: ({ row }) => (
      <div className="flex gap-2 items-center">
        {row.getValue("priority") === "Low" && (
          <ArrowDown className="h-4 w-4" />
        )}
        {row.getValue("priority") === "High" && <ArrowUp className="h-4 w-4" />}
        {row.getValue("priority") === "Medium" && (
          <ArrowRight className="h-4 w-4" />
        )}

        {row.getValue("priority")}
      </div>
    ),
  },
  {
    id: "actions",
    maxSize: 10,
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Make a Copy</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Favorite</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator></DropdownMenuSeparator>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Bug</DropdownMenuItem>
                    <DropdownMenuItem>Feature</DropdownMenuItem>

                    <DropdownMenuItem>Documentation</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <span>Delete</span>
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const TaskBundle = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here's a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Avatar className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
            <AvatarImage
              src="https://ui.shadcn.com/avatars/03.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="space-y-4">
        <div className="w-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter Task..."
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="max-w-sm h-8"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="h-8">
                <Button variant="outline" className="ml-auto">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Columns
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} className="p-2">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="p-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBundle;
