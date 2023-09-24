export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-2 bg-white">
      <p className="text-sm text-gray-600">
        Copyright &copy; {new Date().getFullYear()} Todos os direitos reservados
        por <span className="text-orange-500">Open Fashion</span>
      </p>
    </footer>
  )
}
