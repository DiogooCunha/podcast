import { Badge } from "@/shared/ui/components/badge";
import { Button } from "@/shared/ui/components/button";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import FloatingCard from "./floating-cads";

const HomeHero = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-3 text-black">
            <span className="w-2 h-2 rounded-full bg-orange-400" />
            With AI built-in
          </Badge>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 max-w-lg">
            Learn, plan, hear.
            <span className="block text-muted-foreground">
              With AI at your side.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Aural is the connected workspace where better, faster learning
            happens. Now with AI to help you study, brainstorm, and unravel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-base rounded-full px-7 py-6 font-semibold text-black cursor-pointer"
            >
              Start listening for free
              <KeyboardArrowRightOutlinedIcon className="w-4 h-4 ml-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-base rounded-full px-7 py-6 font-semibold cursor-pointer"
            >
              Request a demo
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[500px] hidden lg:block">
          <FloatingCard
            className="top-10 animate-float"
            title="Up Next"
            children={
              <>
                <div className="flex items-center gap-2"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-amber-300 via-amber-400 to-amber-500 flex items-center justify-center">
                      <HeadphonesOutlinedIcon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        Design Weekly
                      </p>
                      <p className="text-xs text-muted-foreground">32 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-amber-300 via-amber-400 to-amber-500 flex items-center justify-center">
                      <HeadphonesOutlinedIcon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        Startup Stories
                      </p>
                      <p className="text-xs text-muted-foreground">48 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-amber-300 via-amber-400 to-amber-500 flex items-center justify-center">
                      <HeadphonesOutlinedIcon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        Code & Coffee
                      </p>
                      <p className="text-xs text-muted-foreground">28 min</p>
                    </div>
                  </div>
                </div>
              </>
            }
          />

          <FloatingCard
            className="top-25 right-0 animate-float [animation-delay:2s]"
            title="Categories"
            children={
              <>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-chocolate text-white">Technology</Badge>
                  <Badge className="bg-deep-cyan text-white">Bussines</Badge>
                  <Badge className="bg-deep-purple text-white">Comedy</Badge>
                  <Badge className="bg-deep-moss text-white">Education</Badge>
                </div>
              </>
            }
          />

          <FloatingCard
            className="bottom-12 left-18 animate-float [animation-delay:4s]"
            title="Ask Questions"
            desc="Chat with your audio"
          />
          <FloatingCard
            className="bottom-0 right-10 animate-float [animation-delay:4s]"
            children={
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-linear-to-tl from-amber-500 via-amber-400 to-amber-300 flex items-center justify-center">
                    <GraphicEqOutlinedIcon className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      France Revolution
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Topic 12 • 45 min
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-1.5 bg-secondary rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-2/3" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>28:32</span>
                    <span>45:00</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-6">
                  <Button
                    size="lg"
                    className="text-base rounded-full px-5 py-3 font-semibold cursor-pointer"
                  >
                    Haise your hand
                  </Button>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
