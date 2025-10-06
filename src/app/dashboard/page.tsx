"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRightIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox"


export interface productFeedItemTable {
  selected: boolean;
  id: string | undefined;
  id_product_feed: string;
  sku: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  mpn: string;
  size: string;
  image_link: string;
  additional_image_link: string;
  link: string;
  availability: string;
  sale_price: number;
  product_type: string;
  store: string;
}

export interface Items {
  selected: boolean;
  id: string | undefined;
  id_product_feed: string;
  sku: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  mpn: string;
  size: string;
  image_link: string;
  additional_image_link: string;
  link: string;
  availability: string;
  sale_price: number;
  product_type: string;
  store: string;
}

export default function Descarga(): any {
  const [productFeedItems, setProductFeedItems] = useState<any>([]);
  const [page] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);
  const [productosSeleccionados, SetProductosSeleccionados] = useState<any>([]);
  const [searching, SetSearching] = useState<boolean>(false);
  const [dataObj, setDataObj] = useState({
    oferta: "",
    limite: 100,
    fechaInicio: "",
    fechaFinal: "",
    acomodo: 1,
    campania: "",
    medio: "",
    fuente: "",
    categoria: "",
  });
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [startDate, setStartDate] = useState("");
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);

  // State for the second date picker (Fecha final)
  const [endDate, setEndDate] = useState(null);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);

  useEffect(() => {
    console.log("");
  }, []);

  //   const [imagenUrl, setImagenUrl] = useState("");

  return (
    <div className="">
      <div className="flex flex-wrap items-center gap-2 md:flex-row p-8 border border-red-600">
        <Button className="">Ver productos </Button>
        {/* <Button variant="secondary" size="icon" className="size-8">
          <ChevronRightIcon />
        </Button> */}
      </div>

      {/* FORM */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 w-full  border border-blue-800">
        {/* 1. Nombre oferta - w-full aplicado al contenedor y al Input */}
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="nombre_oferta" className="px-1">
            Nombre oferta
          </Label>
          <Input
            type="text"
            id="nombre_oferta"
            placeholder="Nombre de la oferta"
            className="w-full" // <- w-full aquí
          />
        </div>

        {/* 2. Fecha inicial - w-full aplicado al contenedor y al Button */}
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="date-picker-start" className="px-1">
            Fecha inicial
          </Label>
          <Popover open={isStartDateOpen} onOpenChange={setIsStartDateOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker-start"
                className="w-full justify-between font-normal" // <- w-full aquí (antes w-32)
              >
                {startDate ? startDate.toLocaleDateString() : "Select date"}
                <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={startDate}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setStartDate(date);
                  setIsStartDateOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* 3. Fecha final - w-full aplicado al contenedor y al Button */}
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="date-picker-end" className="px-1">
            Fecha final
          </Label>
          <Popover open={isEndDateOpen} onOpenChange={setIsEndDateOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker-end"
                className="w-full justify-between font-normal" // <- w-full aquí (antes w-32)
              >
                {endDate ? endDate.toLocaleDateString() : "Select date"}
                <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={endDate}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setEndDate(date);
                  setIsEndDateOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* 4. Input extra - w-full aplicado al contenedor y al Input */}
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="placeholder_input" className="px-1">
            Campaña
          </Label>
          <Input
            type="text"
            id="placeholder_input"
            placeholder="Campaña"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="placeholder_input" className="px-1">
            Medio
          </Label>
          <Input
            type="text"
            id="placeholder_input"
            placeholder="Medio"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="placeholder_input" className="px-1">
            Fuente
          </Label>
          <Input
            type="text"
            id="placeholder_input"
            placeholder="Fuente"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="placeholder_input" className="px-1">
            Limite
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Limite" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="2-4">2 - 4</SelectItem>
                <SelectItem value="3-6">3 - 6</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Label htmlFor="placeholder_input" className="px-1">
            Categoria
          </Label>
          <Input
            type="text"
            id="placeholder_input"
            placeholder="Categoria"
            className="w-full"
          />
        </div>
      </div>
      <div className="w-full flex flex-row">
        <div className="p-8 ">
          <Button>Ajustar imagen</Button>

          <Card className=" max-w-sm mt-4 w-[1000px] h-[200px]">
            <CardContent>
              <div></div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="p-8">
        {" "}
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Check</TableHead>
              <TableHead>Disponibilidad</TableHead>
              <TableHead>Titulo</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Oferta</TableHead>
              <TableHead>Tienda</TableHead>
              <TableHead>Marca</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
              <Checkbox />

                {/* {productFeedItems.data.items.map(
                  ({
                    selected,
                    sku,
                    price,
                    id_product_feed,
                    title,
                    sale_price,
                    availability,
                    image_link,
                    link,
                    product_type,
                    store,
                    brand,
                    id,
                  }: productFeedItemTable) => ({
                    selected,
                    sku,
                    title,
                    id_product_feed,
                    price,
                    sale_price,
                    availability,
                    image_link,
                    link,
                    product_type,
                    store,
                    brand,
                    id,
                  })
                )} */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
