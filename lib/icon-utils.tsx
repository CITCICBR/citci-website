import { Calendar, BookOpen, Mail, Phone, MapPin, Users, Gift } from "lucide-react"

export function getIcon(icon: string, className?: string): React.ReactNode | null {
  switch (icon) {
    case "Calendar":
      return <Calendar className={className} />
    case "BookOpen":
      return <BookOpen className={className} />
    case "Mail":
      return <Mail className={className} />
    case "Phone":
      return <Phone className={className} />
    case "MapPin":
      return <MapPin className={className} />
    case "Users":
      return <Users className={className} />
    case "Gift":
      return <Gift className={className} />
    default:
      return null
  }
}
