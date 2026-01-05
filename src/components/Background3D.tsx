export function Background3D() {
  return (
    <>
      {/* Base warm paper color */}
      <div className="fixed inset-0 -z-50 bg-[#f2efe9]" />
      
      {/* Crosshatch Pattern Overlay */}
      <div 
        className="fixed inset-0 -z-40 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23888995' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm10 10h10v10H10V10zM0 0h10v10H0V0z' fill='none'/%3E%3Cpath d='M0 20L20 0M-5 5L5 -5M15 25L25 15' stroke='%23888995' stroke-width='1.2'/%3E%3C/g%3E%3C/svg%3E"), 
                         url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0L20 20M-5 15L15 35M5 -5L25 15' stroke='%23888995' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '10px 10px',
          backgroundColor: '#f7f7f5', // less yellow paper color
        }}
      />
    </>
  )
}
