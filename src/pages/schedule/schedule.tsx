import { addDays, eachDayOfInterval, format, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, CircleCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useParams } from "react-router-dom";
import { hairdressers } from "../../assets/hairdressers";
import { services } from "../../assets/products";
import { Hairdresser, Service } from "../../types/types";
import { LogoComponent } from "../../ui/components/logo";
import { ConfirmModal } from "../../ui/components/modal/modal-confirm-choice";

interface TimeSlot {
  start: string;
  end: string;
}

interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

const schedule: DaySchedule[] = [
  {
    day: "Terça-feira",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "10:00", end: "11:00" },
      { start: "11:00", end: "12:00" },
      { start: "14:00", end: "15:00" },
      { start: "15:00", end: "16:00" },
    ],
  },
  {
    day: "Quarta-feira",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "10:00", end: "11:00" },
      { start: "11:00", end: "12:00" },
      { start: "14:00", end: "15:00" },
      { start: "15:00", end: "16:00" },
    ],
  },
  {
    day: "Quinta-feira",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "10:00", end: "11:00" },
      { start: "11:00", end: "12:00" },
      { start: "14:00", end: "15:00" },
      { start: "15:00", end: "16:00" },
    ],
  },
  {
    day: "Sexta-feira",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "10:00", end: "11:00" },
      { start: "11:00", end: "12:00" },
      { start: "14:00", end: "15:00" },
      { start: "15:00", end: "16:00" },
    ],
  },
  {
    day: "Sábado",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "10:00", end: "11:00" },
      { start: "11:00", end: "12:00" },
      { start: "14:00", end: "15:00" },
      { start: "15:00", end: "16:00" },
    ],
  },
];

export const Schedule = () => {
  const { hairdresserId, serviceId } = useParams();
  console.log(hairdresserId, serviceId);
  const [hairdresser, setHairdresser] = useState<Hairdresser>();
  const [service, setService] = useState<Service>();
  const [eventStartEndDate, setEventStartEndDate] = useState<
    { from: Date; to: Date } | undefined
  >();
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<{
    date: Date | null;
    time: string;
  }>({
    date: new Date(),
    time: "",
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    const hd = hairdressers.filter(
      (hairdresser) => hairdresser.id === hairdresserId
    )[0];
    console.log(hd);
    setHairdresser(hd);
  }, [hairdresserId]);

  useEffect(() => {
    const sv = services.filter((serv) => serv.id === serviceId)[0];
    console.log(sv);
    setService(sv);
  }, [serviceId]);

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = getDay(today);
    const daysUntilTuesday = (2 - dayOfWeek) % 7;
    const start = addDays(today, daysUntilTuesday);
    const end = addDays(start, 4);
    setEventStartEndDate({ from: start, to: end });
  }, []);

  const openDatePicker = () => {
    setIsDatePickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const dayOfWeek = getDay(date);
      const daysUntilTuesday = (2 - dayOfWeek) % 7;
      const start = addDays(date, daysUntilTuesday);
      const end = addDays(start, 4);
      setEventStartEndDate({ from: start, to: end });
      setIsDatePickerOpen(false);
    }
  };
  const handleTimeSlotSelect = (day: string, time: string) => {
    const allDatesInRange = eachDayOfInterval({
      start:
        eventStartEndDate && eventStartEndDate.from
          ? eventStartEndDate.from
          : new Date(),
      end:
        eventStartEndDate && eventStartEndDate.to
          ? eventStartEndDate.to
          : new Date(),
    });

    allDatesInRange.forEach((date) => {
      if (day.toLocaleLowerCase() === format(date, "eeee", { locale: ptBR })) {
        setSelectedDateAndTime({ date: date, time: time });
        setSelectedSlot(`${day}-${time}`);
      }
      if (`${day}-${time}` === selectedSlot) {
        setSelectedDateAndTime({ date: null, time: "" });
        setSelectedSlot(null);
      }
    });
  };

  const getFormattedDay = (index: number) => {
    if (eventStartEndDate) {
      const date = addDays(eventStartEndDate.from, index);
      let dayOfWeek = format(date, "eeee", { locale: ptBR });
      dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.substr(1);
      const dayOfMonth = format(date, "dd/MM");
      return { dayOfWeek, dayOfMonth };
    }
    return { dayOfWeek: "", dayOfMonth: "" };
  };

  return (
    <div className="fade-in">
      <div className="flex flex-col max-w-7xl px-6 py-10 w-4/5 mx-auto mt-8 min-h-screen space-y-5">
        <LogoComponent textLeft={false} />
        <div className="">
          <h1 className="text-3xl font-bold text-left mb-6">
            Serviço Escolhido: {service?.name}
          </h1>
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">
              Cabelereira: {hairdresser?.name}
            </h2>
            <button
              onClick={openDatePicker}
              type="button"
              className="flex items-center gap-2 text-left "
            >
              {""}
              <Calendar className="size-5 text-zinc-600" />
              <span className=" text-lg text-zinc-600  flex-1">
                {eventStartEndDate
                  ? `${
                      eventStartEndDate &&
                      eventStartEndDate.from &&
                      eventStartEndDate.from.toLocaleDateString("pt-BR")
                    } - ${
                      eventStartEndDate &&
                      eventStartEndDate.to &&
                      eventStartEndDate.to.toLocaleDateString("pt-BR")
                    }`
                  : "Selecione uma data"}
              </span>
            </button>
          </div>
          {selectedDateAndTime.date && selectedDateAndTime.time ? (
            <div className="flex justify-end items-end">
              <button
                type="button"
                onClick={openModal}
                className="mt-4 bg-[#242933] text-white px-4 py-2 rounded-md flex items-center gap-2 fade-in"
              >
                <span>Confirmar Horário</span>
                <CircleCheck />
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="">
          <div className="mt-6 text-center"></div>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Escolha um Horário
          </h2>
          <div className="flex justify-between h-auto transition-transform transform ">
            {schedule.map((daySchedule, index) => (
              <div
                key={daySchedule.day}
                className={` ${index === 0 ? "rounded-s-lg shadow-l-lg" : ""} ${
                  index === schedule.length - 1
                    ? "rounded-e-lg shadow-e-lg"
                    : ""
                } ${
                  index < schedule.length - 1 ? "border-r border-zinc-500" : ""
                }  w-1/5 p-4`}
              >
                <h2 className="text-2xl font-semibold text-center mb-4  py-2">
                  {getFormattedDay(index).dayOfWeek}
                  <div className="text-lg font-medium mt-1">
                    {getFormattedDay(index).dayOfMonth}
                  </div>
                </h2>
                {daySchedule.slots.map((slot, index) => (
                  <div
                    key={index}
                    className={`border border-gray-300 rounded-md mb-4 p-3 text-center cursor-pointer transition-colors duration-200 ${
                      selectedSlot === `${daySchedule.day}-${slot.start}`
                        ? "bg-[#242933] text-white"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() =>
                      handleTimeSlotSelect(daySchedule.day, slot.start)
                    }
                  >
                    {slot.start} - {slot.end}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape text-white bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  {""}
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
            <DayPicker
              mode="single"
              selected={eventStartEndDate?.from}
              onSelect={handleDateSelect}
              disabled={{
                before: new Date(),
              }}
              locale={ptBR}
            />
          </div>
        </div>
      )}
      {isOpenModal && (
        <div>
          <ConfirmModal
            callBack={closeModal}
            informations={{
              service: service,
              hairdresser: hairdresser,
              dateTime: selectedDateAndTime,
            }}
          />
        </div>
      )}
    </div>
  );
};
