import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToResults = () => {
    statsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-4 left-4 z-50">
        <div className="text-sm font-semibold">
          <span className="text-white font-bold">Glaza.Help</span>
          <span className="text-muted-foreground"> / Case</span>
        </div>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          onClick={scrollToResults}
        >
          Результаты
        </Button>
      </div>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                GEO-SCALING CASE
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Кейс <span className="text-primary">Glaza.Help</span>
            </h1>

            <div className="text-4xl md:text-5xl font-bold text-white/90">
              <span className="text-primary">4300+</span> leads / month
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Как масштабировать клинику с 100 до 4300+ заявок в месяц
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-sm">
              <span className="text-primary font-mono">Роль:</span>
              <span className="text-white/80">Операционный маркетинг / SEO / Geo-Scaling</span>
            </div>

            <div className="pt-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group"
                onClick={scrollToResults}
              >
                Посмотреть цифры
                <Icon name="ChevronDown" size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Задача: <span className="text-primary">Захват регионов</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  Клиника лазерной коррекции зрения. Ниша с перегретым аукционом в Директе и высокой конкуренцией.
                </p>
                <p className="text-lg">
                  <span className="text-primary font-semibold">Стратегия:</span> Не бодаться ставками в лоб, а забрать весь органический трафик в регионах через SEO-сетку.
                </p>
              </div>
            </div>

            <Card className="bg-card border-border p-8">
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-black text-primary text-glow">
                    1200+
                  </div>
                  <div className="text-xl text-muted-foreground">
                    посадочных страниц под каждый город и интент
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Я не был стратегом.<br />Я был <span className="text-primary">«двигателем»</span>.
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="border-l-4 border-primary pl-6 text-left">
                <p className="text-lg text-muted-foreground">
                  Стратегию придумал Head of Marketing. Моя задача была — реализовать её руками, системно, без ошибок и в промышленных масштабах.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Layers" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Конвейер гео-страниц</h3>
                <p className="text-muted-foreground">
                  Создал и упаковал 600+ страниц вида «Лазерная коррекция в [Самаре]». Структура, лид-магниты, формы записи, социальные доказательства. Каждая страница — как отдельный лендинг.
                </p>
              </div>
            </Card>

            <Card className="bg-card border-primary/50 p-8 hover:border-primary transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Адаптация и «Оживление»</h3>
                <p className="text-muted-foreground">
                  Чтобы Яндекс не склеил сетку за дубли, я адаптировал контент: местные топонимы, районы, специфика лексики. Делал так, чтобы житель Урюпинска верил, что клиника "своя", а не московская заглушка.
                </p>
              </div>
            </Card>

            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Техническое SEO</h3>
                <p className="text-muted-foreground">
                  Внутренняя перелинковка, работа с H1-H3, мета-тегами под семантику. Плотная работа с разработкой по микроразметке и скорости загрузки.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4" ref={statsRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Результаты <span className="text-primary">команды</span>{" "}
              <span className="text-muted-foreground text-3xl">за 4 года</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              * Я подключился на этапе масштабирования (последний год), обеспечивая рост базы.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50 p-8 text-center">
              <div className={`space-y-4 ${inView ? 'fade-in-up' : 'opacity-0'}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-2">
                  <span className="text-2xl font-black text-primary">x43</span>
                </div>
                <div className="text-6xl md:text-7xl font-black text-primary text-glow">
                  x43
                </div>
                <div className="text-xl font-bold">Рост заявок</div>
                <div className="text-sm text-muted-foreground">
                  с 100 до 4300+/мес
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors">
              <div className={`space-y-4 ${inView ? 'fade-in-up' : 'opacity-0'} [animation-delay:200ms]`}>
                <div className="text-5xl md:text-6xl font-black text-white">
                  ₽350
                </div>
                <div className="text-xl font-bold">CPA</div>
                <div className="text-sm text-muted-foreground">
                  снижение с 900 ₽
                </div>
                <div className="text-xs text-primary font-semibold mt-2">
                  В нише медицины — это космос
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-8 text-center hover:border-primary/50 transition-colors">
              <div className={`space-y-4 ${inView ? 'fade-in-up' : 'opacity-0'} [animation-delay:400ms]`}>
                <div className="text-5xl md:text-6xl font-black text-white">
                  52 000+
                </div>
                <div className="text-xl font-bold">Органика</div>
                <div className="text-sm text-muted-foreground">
                  трафик в месяц
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  было 800
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-secondary/30 border-border p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Динамика заявок</h3>
              <p className="text-sm text-muted-foreground">
                Органический рост без увеличения рекламного бюджета
              </p>
            </div>
            
            <div className="relative h-64 flex items-end justify-between gap-4 px-8">
              <div className="flex-1 bg-gradient-to-t from-primary/50 to-primary/10 rounded-t-lg relative group hover:from-primary/60 transition-all duration-300" style={{height: '15%'}}>
                <div className="absolute -top-8 left-0 right-0 text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  100
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-t from-primary/50 to-primary/10 rounded-t-lg relative group hover:from-primary/60 transition-all duration-300" style={{height: '25%'}}>
                <div className="absolute -top-8 left-0 right-0 text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  800
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t-lg relative group hover:from-primary/70 transition-all duration-300" style={{height: '50%'}}>
                <div className="absolute -top-8 left-0 right-0 text-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  2100
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-t from-primary to-primary/30 rounded-t-lg relative group hover:from-primary transition-all duration-300 shadow-lg shadow-primary/50" style={{height: '100%'}}>
                <div className="absolute -top-12 left-0 right-0 text-center">
                  <div className="text-2xl font-black text-primary text-glow">4300+</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-xs text-muted-foreground mt-4 px-8">
              <span>Год 1</span>
              <span>Год 2</span>
              <span>Год 3</span>
              <span>Год 4</span>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-primary font-semibold">65%</span>
              <span className="text-muted-foreground">заявок из SEO, которую мы построили</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Чему меня <span className="text-primary">научил</span> этот проект
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Я пришел в команду на 4-й год, когда стратегия уже работала. Моей задачей было не «изобретать велосипед», а крутить педали на максимальной скорости.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Идея — ничто, Реализация — всё",
                text: "Стратегия гео-сетки была придумана до меня. Но чтобы она принесла 4300 заявок, кто-то должен был физически собрать 1200 страниц. Я понял: в маркетинге на дистанции побеждает не тот, кто креативнее, а тот, кто умеет делать монотонную работу качественно и без ошибок."
              },
              {
                number: "02",
                title: "Масштаб требует дисциплины",
                text: "Когда у тебя 1200 поддоменов, ты не можешь работать «по настроению». Любая мелкая ошибка в шаблоне умножается на 1200. Этот проект научил меня системности. Я умею работать по ТЗ, следить за дедлайнами и проверять себя."
              },
              {
                number: "03",
                title: "Понимание «Зачем»",
                text: "Хоть я был исполнителем, я видел общую картину: CPA, ROI, Трафик. Я делал свою часть работы (контент/SEO/верстка) не для галочки, а понимая, как каждая конкретная страница влияет на общую воронку продаж."
              }
            ].map((insight, idx) => (
              <Card key={idx} className="bg-card border-border p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="text-5xl font-black text-primary/30 flex-shrink-0">
                    {insight.number}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{insight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {insight.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ПОЧЕМУ СЕЙЧАС Я <span className="text-primary">ИДУ ВЫШЕ</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Этот проект стал моим «боевым крещением». Я набил руку, увидел изнанку масштабного бизнеса и перерос роль линейного исполнителя.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/30 p-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Меня нельзя обмануть подрядчикам</h3>
                <p className="text-muted-foreground">
                  Я своими руками делал SEO, контент и верстку. Если подрядчик скажет: «На эту задачу нужно 2 недели», я точно знаю, что её можно сделать за 2 дня.
                </p>
              </div>
            </Card>

            <Card className="bg-card border-primary/30 p-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Я умею декомпозировать стратегию</h3>
                <p className="text-muted-foreground">
                  Я видел, как «Большая Идея» распадается на тысячи мелких задач. Я умею превращать абстрактную стратегию в понятные, пошаговые ТЗ для команды.
                </p>
              </div>
            </Card>

            <Card className="bg-card border-primary/30 p-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Мои решения опираются на реальность</h3>
                <p className="text-muted-foreground">
                  Я не витаю в облаках и не предлагаю оторванные от жизни идеи. Любая моя гипотеза всегда приземлена на возможности реализации, потому что я знаю цену ручного труда.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>Glaza.Help Case Study · 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;